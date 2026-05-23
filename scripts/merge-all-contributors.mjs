import { promises as fs } from "node:fs";
import path from "node:path";

const inputDirectory = path.resolve(process.cwd(), "data/contributors");
const outputFile = path.resolve(
  process.cwd(),
  "content/information/contributors.md",
);

const listStartMarker =
  "<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->";
const listEndMarker = "<!-- ALL-CONTRIBUTORS-LIST:END -->";

/**
 * Escape markdown table content.
 *
 * @param {string} value
 * @returns {string}
 */
function escapeMarkdown(value) {
  return value.replace(/\|/gu, "\\|").trim();
}

/**
 * Read contributor JSON files.
 *
 * @returns {Promise<Array<object>>}
 */
async function loadContributorFiles() {
  const entries = await fs.readdir(inputDirectory, { withFileTypes: true });

  const files = entries
    .filter((entry) => entry.isFile())
    .map((entry) => entry.name)
    .filter((name) => name.endsWith(".json"))
    .sort((left, right) => left.localeCompare(right));

  const merged = new Map();

  for (const fileName of files) {
    const repoName = fileName.replace(/\.json$/u, "");
    const filePath = path.join(inputDirectory, fileName);

    const raw = await fs.readFile(filePath, "utf8");
    const parsed = JSON.parse(raw);

    for (const contributor of parsed.contributors ?? []) {
      const login = contributor.login?.trim();

      if (!login) {
        console.warn(`Skipping contributor without login in ${fileName}`);
        continue;
      }

      const existing = merged.get(login);

      const contributions = Array.from(
        new Set(contributor.contributions ?? []),
      ).sort((left, right) => left.localeCompare(right));

      if (!existing) {
        merged.set(login, {
          login,
          name: contributor.name ?? login,
          profile: contributor.profile ?? `https://github.com/${login}`,
          avatar_url: contributor.avatar_url ?? "",
          contributions,
          repos: [repoName],
        });

        continue;
      }

      existing.contributions = Array.from(
        new Set([...existing.contributions, ...contributions]),
      ).sort((left, right) => left.localeCompare(right));

      if (!existing.repos.includes(repoName)) {
        existing.repos.push(repoName);
        existing.repos.sort((left, right) => left.localeCompare(right));
      }
    }
  }

  return Array.from(merged.values()).sort((left, right) => {
    return left.login.localeCompare(right.login);
  });
}

/**
 * Render the generated contributor block body.
 *
 * @param {Array<object>} contributors
 * @returns {string}
 */
function renderContributorsBlock(contributors) {
  const lines = [
    "<!-- prettier-ignore-start -->",
    "<!-- markdownlint-disable -->",
    "",
    `Total contributors: **${contributors.length}**`,
    "",
    "| Contributor | Contributions | Repositories |",
    "|---|---|---|",
  ];

  for (const contributor of contributors) {
    const name = `[${escapeMarkdown(contributor.name)}](${contributor.profile})`;

    const contributionList = contributor.contributions
      .map((item) => `\`${escapeMarkdown(item)}\``)
      .join(", ");

    const repos = contributor.repos
      .map((repo) => `\`${escapeMarkdown(repo)}\``)
      .join(", ");

    lines.push(`| ${name} | ${contributionList} | ${repos} |`);
  }

  lines.push(
    "",
    "<!-- markdownlint-restore -->",
    "<!-- prettier-ignore-end -->",
  );

  return lines.join("\n");
}

/**
 * Render the default contributor page when the target file has no marker block yet.
 *
 * @param {string} generatedBlock
 * @returns {string}
 */
function renderDefaultPage(generatedBlock) {
  return [
    "---",
    "title: Contributors",
    "date: 2026-04-15T08:00:00.000+0700",
    "---",
    "",
    "* [Contributors](#contributors)",
    "",
    "Ananke lives from the work of its contributors.",
    "",
    "## Contributors",
    "",
    listStartMarker,
    generatedBlock,
    listEndMarker,
    "",
  ].join("\n");
}

/**
 * Replace the generated list between all-contributors markers.
 *
 * @param {string} existingMarkdown
 * @param {string} generatedBlock
 * @returns {string}
 */
function replaceContributorsBlock(existingMarkdown, generatedBlock) {
  const startIndex = existingMarkdown.indexOf(listStartMarker);
  const endIndex = existingMarkdown.indexOf(listEndMarker);

  if (startIndex === -1 || endIndex === -1 || endIndex <= startIndex) {
    return renderDefaultPage(generatedBlock);
  }

  const beforeBlock = existingMarkdown.slice(0, startIndex + listStartMarker.length);
  const afterBlock = existingMarkdown.slice(endIndex);

  return `${beforeBlock}\n${generatedBlock}\n${afterBlock}`.replace(/\n*$/u, "\n");
}

async function main() {
  const contributors = await loadContributorFiles();
  const generatedBlock = renderContributorsBlock(contributors);

  let existingMarkdown = "";

  try {
    existingMarkdown = await fs.readFile(outputFile, "utf8");
  } catch (error) {
    if (error && error.code !== "ENOENT") {
      throw error;
    }
  }

  const markdown = existingMarkdown
    ? replaceContributorsBlock(existingMarkdown, generatedBlock)
    : renderDefaultPage(generatedBlock);

  await fs.writeFile(outputFile, markdown, "utf8");

  console.log(
    `Generated contributor page with ${contributors.length} contributors.`,
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
