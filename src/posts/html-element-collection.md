---
title: WTF is an HTMLElementCollection?
metatitle: tinycode | WTF is an HTMLElementCollection?
subtitle: And why does it matter
categories: ["JS", "Longform"]
---

# {{title}}
## {{subtitle}}

Have you ever written the following code?

```js
const paragraphsToHide = document.getElementsByClassName("p.hide");
paragraphsToHide.forEach(para => para.hidden = true);
// error = paragraphsToHide.forEach is not a function!!!

```

## What is an HTMLCollection?

An HTMLCollection  is a grouping of HTML Elements, commonly used in manipulating groups of elements on a page. 

Maybe you're trying to loop through a list of paragraphs on the page, maybe trying to consolidate form inputs or hide all non-selected navigation elements. There are many cases where you might want to perform this type of iteration. 

The reason that I use the term "grouping" instead of "array" is because although the HTMLCol;lection is "iteratable", it is not actually an array.

## How do I use an HTMLcollection?

There are a couple ways to use the HTMLCollection. The first is to use a for...of loop. This looks similar to a for loop, but it has a slightly more compact and easy to use syntax.

```js
const paragraphs = document.querySelectorAll();
for (let para of paragraphs) {
    console.log(para.innerTextContent);
}
// returns the list of HTMLElements

```

The second is to use a classic for loop. This is a very familiar syntax and is thought to be the most performant of any of the methods. If you do have performance concerns for your application this would be recommended. 


```js
const paragraphs = document.querySelectorAll();
for (let i = 0; i< paragraphs.length; i++) {
    const para = paragraphs[i];
    console.log(para.innerTextContent);
}
// returns the list of HTMLElements

```

The final approach is to 