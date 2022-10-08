---
metatitle: tinycode | Describe Scores, Comparisons + Ranges Using The <meter> Element
title: Describe Scores, Comparisons + Ranges Using The `<meter>` Element
subtitle: Semantic HTML Basics
mediumurl: https://tinycode.medium.com/describe-scores-comparisons-ranges-using-the-meter-element-9dd5650788e5
---

# {{title}}
## {{subtitle}}

The [meter element](https://html.spec.whatwg.org/#the-meter-element) is used to markup a value that falls within a range, and has an optimum value. 

The tag is rendered as a scalar bar, similar to the progress element. 

For example, the following HTML produces the meter below in Chrome v105:

```html
<p>He got a 20% score 
  <meter min="0" low="30" high="70" max="100"value="20" optimum="100">
    20%
  </meter> 
  on the exam.</p>
```

![](/img/2022-10-07-19-22-25.png)

# How Does The `<meter>` Work?

Internally, the element creates 3 different ranges within the maximum and minimum values, based on the low and high values, and the values inbetween. In the example above there would be 3 ranges registered by the element: 

1. 0-30
2. 30-70
3. 70-100

The element then styles the bar based on how close the actual value is to the "optimum" value.

## The Optimum Value

The 'optimum' value of the range element is considered to be the maximum value unless otherwise specified. If you specify the optimum value to be somewhere else in the bar then the bar will register the red, green and yellow statuses differently. 

For example if I change the optimum value of the above meter to 0 like so `optimum="0"`, then the element processes the status of the bar differently. Now the score of 20 is actually in the most optimum range!

![](/img/2022-10-07-19-27-01.png)

The properties of the meter element can also be modified with javascript, like so: 

```js
let meterElement = document.querySelector('meter');
meterElement.optimum = 50;
```

# How to Use The `<meter>` Element

The element can be used to denote many types of range values. Scores on a test, energy efficiency, cost comparisons, disk usage, or product rating values. Again, any scalar value that is static. 


The meter element is distionctly different from the `progress` element, which marks up content that is progressing from one discrete value to a finished value. 

# Meter Element Content Categories

The meter element is considered phrasing content, defined as "the text of the document" and can be used anywhere in the document body where phrasing content is expected. That includes inside header tags, paragraph tags, and any other tag whose 'content model' contains phrasing content.

It is also "labelable" content, which is a small subcategory of HTML elements that can be associated with a label element. This list includes: `<button>`, `<input>`, `<meter>`, `<output>`, `<progress>`, `<select>`, and `<textarea>`.


