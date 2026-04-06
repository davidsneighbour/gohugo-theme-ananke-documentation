---
title: Getting Started
date: 2026-01-16T08:00:00.000+0700
---

This guide summarizes the first configuration steps after installing Ananke.

## 1) Install the theme

Choose one installation method:

* [Installation as Hugo Module (recommended)](installation/gohugo-module)
* [Installation as Git Submodule](installation/git-submodule)

## 2) Confirm Hugo version compatibility

Check what Hugo version you have installed with `hugo version` and then compare against the minimum requirement in `config/_default/module.toml`.

```bash
hugo version
```

## 3) Configure required basics

At minimum, configure:

* Site `title`
* `baseURL`
* Theme/module setup
* `params` values you want to customize

See:

* [General Configuration](configuration/general)
* [SEO Configuration](configuration/seo)
* [Social Media Networks](configuration/social-media-networks)

## 4) Add content and front matter

Start adding content and use front matter options supported by Ananke:

* [Front Matter Options](content/frontmatter)
* [General Content Features](content/general)
* [Reading Time](content/reading-time)
* [Shortcodes](content/shortcodes)

## 5) Customize visual style

For design and UI adjustments:

* [Hero section](customisation/hero-section)
* [Colors](customisation/colours)
* [Styles and CSS](customisation/styles)
* [Comments setup](customisation/comments)

## 6) Run and verify locally

Run Hugo locally and verify pages, menus, metadata, and social links:

```bash
hugo server
```

If you hit issues, see [Troubleshooting](troubleshooting).
