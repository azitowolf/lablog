---
title: tinycode
metatitle: tinycode
layout: base.njk
signoff: false
---

# tinycode

This is a blog by @azitowolf.

My goal is to help software developers become proficient at the most basic and fundamental Web technology, HTML.

I also work frequently with Sitecore and enjoy sharing thoughts and learnings in that area as well.

{% for post in collections.posts %}
- [{{post.data.title}}]({{post.url}}) {% for category in post.data.categories %}{% include "./tag.njk" %}{%- endfor %}
{%- endfor %}

## Posts About HTML

{% for post in collections.posts %}{% for category in post.data.categories %}{%if category == "HTML" %} 
- [{{post.data.title}}]({{post.url}})
{%- endif%}{%- endfor %}{%- endfor %}
