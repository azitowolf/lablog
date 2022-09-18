---
title: tinycode
metatitle: tinycode
layout: base.njk
signoff: false
---

# tinycode

This is a blog by @azitowolf, a web developer and blogger with more than 10 years experience in the industry.

My goal is to help software developers become proficient with the most basic and fundamental Web Technology, HTML. Too many web developers make it too far into their careers without becoming competent HTML authors, and I'd like to change that. 

If this is your first time here, I suggest reading about the [HTML Specification](/posts/html-how-to-read-the-spec/) and then moving on to learning about [how to read it](/posts/html-how-to-read-the-spec/). Then you can view some of the individual posts about specific elements, or you can take a look at the [cheat sheets]() that I've been working on to help people master HTML.

<!-- TODO: ORDER BY DATE PUBLISHED -->
<!-- TODO: show only html posts in main view -->

## Browse All My Posts

{% for post in collections.posts %}
- [{{post.data.title}}]({{post.url}}) {% for category in post.data.categories %}{% include "./tag.njk" %}{%- endfor %}
{%- endfor %}

## Other Topics

{% for post in collections.jss %}
- [{{post.data.title}}]({{post.url}}) {% for category in post.data.categories %}{% include "./tag.njk" %}{%- endfor %}
{%- endfor %}
