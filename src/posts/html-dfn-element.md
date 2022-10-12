---
metatitle: Create Inline Definitions With The `<dfn>` Element | tinycode
title: Create Inline Definitions With The `<dfn>` Element
subtitle: Semantic HTML Foundations 
categories: ["HTML", "Shortform"]
mediumurl: https://medium.com/semantic-html/the-dfn-element-92a1a0a95e99
---

# {{title}}
## {{subtitle}}

The HTML `<dfn>` element is a text element that’s used to indicate a definition (a word and then its meaning) in your text content.

```html
<p>A <dfn>shoe</dfn> is an article of clothing that's worn on the feet 
and makes walking more comfortable.</p>
```

Generally speaking, the text in the `<dfn>` tag is the text that’s being defined. However, if you want to use a modified version of the defined text instead of the definition itself, the `<abbr>` element’s title attribute can be substituted as the text to be defined.

For example:

```html
<p>The <dfn><abbr title="Hypertext Markup Language">HTML</abbr></dfn> Specification
allows web developers to semantically define the content of their websites. </p>
```

As with all of the text semantics elements, the dfn element is rendered inline and expect only text (or an abbr element) as a child.
