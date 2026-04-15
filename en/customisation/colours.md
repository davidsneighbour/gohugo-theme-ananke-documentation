---
title: Colours
date: 2026-01-16T08:00:00.000+0700
weight: 300
---



## Set Content Font Color

You can set the font color of the main content both globally and on individual pages:

Globally:
Set the `text_color` param in the `config.toml` file.

```toml
[params]
text_color = "green"
```

Individual Page (prioritized over global):
Set the `text_color` param in a page's markdown file front matter.

note: The value of `text_color` must be a [valid tachyons color class](https://tachyons.io/docs/themes/skins/).
