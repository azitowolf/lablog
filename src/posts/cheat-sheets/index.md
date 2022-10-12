---
layout: base.njk
signoff: false
index: true
---

# Cheat Sheets

{% for post in collections.cheatsheets %}
{% if post.data.index != true %}
- [{{post.data.title}}]({{post.url}}) {% for category in post.data.categories %}{% include "./tag.njk" %}{%- endfor %}
{% endif %}
{%- endfor %}