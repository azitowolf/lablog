---
metatitle: tinycode | The <meter> and <range> Elements
title: The `<meter>` and `<range>` Elements
subtitle: Describe Ranges using the The `<meter>` and `<range>` Elements
layout: base.njk
---

# {{title}}
## {{subtitle}}

The [meter element](https://html.spec.whatwg.org/#the-meter-element) is used to markup a value that falls within a range, and has an optimum value. 

The tag is rendered as a scalar bar, similar to the progress element. 

For example, the following HTML

<p>He got a 20% score <meter min="0" low="30" high="70" max="100"
  value="20" optimum="100">20%</meter> on the exam.</p>

produces the following meter in Chrome:


# How to use the meter element

The element can be used to denote many types of range values. Scores on a test, energy efficiency, cost comparisons, disk usage, or product rating values. Again, any scalar value that is static. 

This is distionctly different from the `progress` element, which marks up content that is progressing from one discrete value to a finished value. 

# Meter Element Content Categories

The meter element is considered phrasing content, defined as "the text of the document" and can be used anywhere in the document body where phrasing content is expected. That includes inside header tags, paragraph tags, and any other tag whose 'content model' contains phrasing content.

It is also "lebelable" content, which is a small subcategory of HTML elements that can be associated with a label element. This list includes: <button>, <input>, <keygen> Deprecated, <meter>, <output>, <progress>, <select>, and <textarea>.


