---
layout: base.njk
---

# Browse Posts

{% for post in collections.posts %}
{% if post.data.hidden != true and post.data.index != true %}
- [{{post.data.title}}]({{post.url}}) {% for category in post.data.categories %}{% include "./tag.njk" %}{%- endfor %}
{%- endif %}
{%- endfor %}