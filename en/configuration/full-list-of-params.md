---
title: 'Full list of Params'
date: '2026-04-15T16:27:20+07:00'
tags: []
featured_image: ""
description: ""
weight: 900
---

This is a list of all parameters that currently exist in the theme with links to their documentation.

> Note: this list is not up to date and may miss some parameters. If you find any missing parameters, please submit a pull request to update this page. This note is a canary ;) If it disappears the list is up to date and will be updated continuously as changes are made to the theme.

## Configuration parameters

All parameters are under the `params.ananke` namespace. They are listed here without this prefix for readability. Depending on your configuration they are located at one of these locations:

* under `[params.ananke]` in `hugo.toml`, `config.toml`, `config/ENVIRONMENT/hugo.toml`, or `config/ENVIRONMENT/config.toml`
* `[ananke]` in your `config/ENVIRONMENT/params.toml` file

| Parameter                | Default | Description                                       |
| ------------------------ | ------- | ------------------------------------------------- |
| `show_recent_posts`      | `true`  | Show recent posts on the homepage.                |
| `home.content_alignment` | `left`  | Set the alignment of the content on the homepage. |

## Front matter parameters

All front matter parameters are under the `params.ananke` namespace. They are listed here without this prefix for readability. They are set individually in the front matter of your content files.

Example front matter:

```yaml
params:
  ananke:
    show_date: false
```

If a parameter is marked as "Global", it can also be set in the configuration under the `page` namespace. For example, the `show_date` parameter can be set globally in the configuration like this:

```toml
[page]
show_date = false
```

A local front matter parameter will override the global configuration parameter.

Older versions of Hugo allow the front matter to work without being under the `params` namespace, but it is not recommended to use this method as it will not be compatible with future versions of Hugo.

| Parameter   | Global | Default | Description                |
| ----------- | :----: | :-----: | -------------------------- |
| `show_date` |   ✓    | `true`  | Show the date of the post. |

## Configured Ananke Params (dump)

```toml
[params]
custom_css = ['fixes.css', 'highlighting.css']

[params.ananke.social]
icon_path = 'ananke/socials/%s.svg'

[params.ananke.social.follow]
new_window_icon = false

[params.ananke.social.networks]
[params.ananke.social.networks.bluesky]
color = '#1185fe'
icon = 'bluesky'
label = 'Bluesky'
link = 'https://bsky.app/intent/compose'
profile = 'https://bsky.app/profile/%s'
slug = 'bluesky'

[params.ananke.social.networks.bluesky.particles]
text = 'permalink'

[params.ananke.social.networks.email]
icon = 'envelope'
label = 'Email'
link = 'mailto:'
profile = false
slug = 'email'

[params.ananke.social.networks.email.particles]
body = 'permalink'
subject = 'title'

[params.ananke.social.networks.facebook]
color = '#3b5998'
icon = 'facebook'
label = 'Facebook'
link = 'https://facebook.com/sharer/sharer.php'
profile = 'https://www.facebook.com/%s'
slug = 'facebook'

[params.ananke.social.networks.facebook.particles]
u = 'permalink'

[params.ananke.social.networks.github]
color = '#6cc644'
icon = 'github'
label = 'GitHub'
profile = 'https://github.com/%s/'
slug = 'github'

[params.ananke.social.networks.gitlab]
color = '#FC6D26'
icon = 'gitlab'
label = 'GitLab'
profile = 'https://gitlab.com/%s/'
slug = 'gitlab'

[params.ananke.social.networks.hackernews]
color = '#ff4000'
icon = 'hacker-news'
label = 'Hacker News'
link = 'https://news.ycombinator.com/submitlink'
profile = 'https://news.ycombinator.com/user?id=%s'
slug = 'hackernews'

[params.ananke.social.networks.hackernews.particles]
t = 'description'
u = 'permalink'

[params.ananke.social.networks.instagram]
color = '#e1306c'
icon = 'instagram'
label = 'Instagram'
profile = 'https://www.instagram.com/%s/'
slug = 'instagram'

[params.ananke.social.networks.keybase]
color = '#3d76ff'
icon = 'keybase'
label = 'Keybase'
profile = 'https://keybase.io/%s'
slug = 'keybase'

[params.ananke.social.networks.linkedin]
color = '#0077b5'
icon = 'linkedin'
label = 'LinkedIn'
link = 'https://www.linkedin.com/shareArticle'
profile = 'http://linkedin.com/in/%s'
slug = 'linkedin'

[params.ananke.social.networks.linkedin.particles]
params = 'mini=true'
source = 'permalink'
summary = 'description'
title = 'title'
url = 'permalink'

[params.ananke.social.networks.mastodon]
color = '#6364FF'
icon = 'mastodon'
label = 'Mastodon'
profile = ''
slug = 'mastodon'

[params.ananke.social.networks.medium]
color = '#0077b5'
icon = 'medium'
label = 'Medium'
profile = 'https://medium.com/@%s/'
slug = 'medium'

[params.ananke.social.networks.pinterest]
color = '#e60023'
icon = 'pinterest'
label = 'Pinterest'
link = 'https://pinterest.com/pin/create/button/'
profile = 'https://www.pinterest.com/%s/'
slug = 'pinterest'

[params.ananke.social.networks.pinterest.particles]
description = 'description'
media = 'permalink'
url = 'permalink'

[params.ananke.social.networks.reddit]
color = '#ff4500'
icon = 'reddit'
label = 'Reddit'
link = 'https://reddit.com/submit/'
profile = 'https://www.reddit.com/user/%s/'
slug = 'reddit'

[params.ananke.social.networks.reddit.particles]
params = 'resubmit=true'
title = 'title'
url = 'permalink'

[params.ananke.social.networks.rss]
color = '#ff6f1a'
icon = 'rss'
label = 'RSS'
profile = ''
slug = 'rss'

[params.ananke.social.networks.slack]
color = '#E01E5A'
icon = 'slack'
label = 'Slack'
profile = ''
slug = 'slack'

[params.ananke.social.networks.stackoverflow]
color = '#f48024'
icon = 'stack-overflow'
label = 'Stack Overflow'
profile = 'https://stackoverflow.com/users/%s'
slug = 'stackoverflow'

[params.ananke.social.networks.telegram]
color = '#0088cc'
icon = 'telegram'
label = 'Telegram'
link = 'https://telegram.me/share/url'
profile = 'https://t.me/%s'
slug = 'telegram'

[params.ananke.social.networks.telegram.particles]
text = 'description'
url = 'permalink'

[params.ananke.social.networks.tiktok]
color = '#fe2c55'
icon = 'tiktok'
label = 'TikTok'
profile = 'https://www.tiktok.com/@%s'
slug = 'tiktok'

[params.ananke.social.networks.tumblr]
color = '#35465c'
icon = 'tumblr'
label = 'Tumblr'
link = 'https://www.tumblr.com/widgets/share/tool'
profile = 'https://www.tumblr.com/blog/%s'
slug = 'tumblr'

[params.ananke.social.networks.tumblr.particles]
canonicalurl = 'permalink'
caption = 'description'
content = 'description'
params = 'posttype=link'
sharesource = 'source'
title = 'title'

[params.ananke.social.networks.twitter]
color = '#1da1f2'
icon = 'twitter'
label = 'Twitter'
link = 'https://twitter.com/intent/tweet/'
profile = 'https://twitter.com/%s'
slug = 'twitter'

[params.ananke.social.networks.twitter.particles]
text = 'description'
url = 'permalink'

[params.ananke.social.networks.whatsapp]
color = '#25d366'
icon = 'whatsapp'
label = 'WhatsApp'
link = 'whatsapp://send'
linkintext = true
profile = false
slug = 'whatsapp'

[params.ananke.social.networks.whatsapp.particles]
text = 'description'

[params.ananke.social.networks.x-twitter]
color = '#000000'
icon = 'x-twitter'
label = 'X'
link = 'https://twitter.com/intent/tweet/'
profile = 'https://x.com/%s'
slug = 'x-twitter'

[params.ananke.social.networks.x-twitter.particles]
text = 'description'
url = 'permalink'

[params.ananke.social.networks.xing]
color = '#026466'
icon = 'xing'
label = 'Xing'
link = 'https://www.xing.com/app/user'
profile = 'https://www.xing.com/profile/%s'
separator = ';'
slug = 'xing'

[params.ananke.social.networks.xing.particles]
params = 'op=share'
title = 'title'
url = 'permalink'

[params.ananke.social.networks.youtube]
color = '#cd201f'
icon = 'youtube'
label = 'YouTube'
profile = 'https://www.youtube.com/@%s'
slug = 'youtube'

[params.ananke.social.share]
icons = true
sharetext = true
```

## Configured Mounts (dump)

```json
{
   "path": "github.com/theNewDynamic/gohugo-theme-ananke/v2",
   "version": "",
   "time": "0001-01-01T00:00:00Z",
   "owner": "",
   "dir": "/home/patrick/github.com/theNewDynamic/gohugo-theme-ananke",
   "mounts": [
      {
         "source": "node_modules",
         "target": "assets"
      },
      {
         "source": "assets",
         "target": "assets"
      },
      {
         "source": "package.json",
         "target": "assets/_jsconfig/package.json"
      },
      {
         "source": "docs/en",
         "target": "content",
         "sites": {
            "matrix": {
               "languages": [
                  "en"
               ],
               "versions": null,
               "roles": null
            },
            "complements": {
               "languages": null,
               "versions": null,
               "roles": null
            }
         }
      },
      {
         "source": "data",
         "target": "data"
      },
      {
         "source": "layouts",
         "target": "layouts"
      },
      {
         "source": "i18n",
         "target": "i18n"
      },
      {
         "source": "archetypes",
         "target": "archetypes"
      },
      {
         "source": "static",
         "target": "static"
      }
   ]
}
{
   "path": "github.com/theNewDynamic/gohugo-theme-ananke/v2",
   "version": "",
   "time": "0001-01-01T00:00:00Z",
   "owner": "github.com/theNewDynamic/gohugo-theme-ananke/v2",
   "dir": "/home/patrick/github.com/theNewDynamic/gohugo-theme-ananke/",
   "mounts": [
      {
         "source": "node_modules",
         "target": "assets"
      },
      {
         "source": "assets",
         "target": "assets"
      },
      {
         "source": "package.json",
         "target": "assets/_jsconfig/package.json"
      }
   ]
}
```
