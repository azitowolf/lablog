---
layout: base.njk
index: true
signoff: false
---

# Posts on JSS

{% for post in collections.jss %}
{% if post.data.index != true %}
- [{{post.data.title}}]({{post.url}}) {% for category in post.data.categories %}{% include "./tag.njk" %}{%- endfor %}
{% endif %}
{%- endfor %}