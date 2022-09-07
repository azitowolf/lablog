---
title: tinycode
metatitle: tinycode
layout: base.njk
---

# tinycode

This is a blog by @azitowolf.

I mostly write about software, but occasionally about culture and economics as well.

The goal is to share a bit of what I've learned.

{% for post in collections.posts %}
- [{{post.data.title}}]({{post.url}})
{%- endfor %}