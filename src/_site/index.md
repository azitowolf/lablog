---
title: tinycode blog
layout: "base.njk"
---

This is a software knowledge sharing blog by @azitowolf.

The goal is to share a bit of what I've learned with the development community.

Check out the posts here:

{% for post in collections.posts %}
- [{{post.data.title}}]({{post.url}})
{%- endfor %}