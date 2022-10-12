---
title: WTF is an HTMLCollection?
metatitle: tinycode | WTF is an HTMLElementCollection?
categories: ["JS", "Shortform"]
mediumurl: https://medium.com/p/b43c2472e624
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

The reason that I use the term "grouping" instead of "array" is because although the HTMLCol;lection is an "iteratable object", *it is not actually an array*.

## How do I use an HTMLcollection?

There are a couple ways to use the HTMLCollection. 

The best approach is to ... not use it at all. If you stick to the the now outdated document.getElementsByClassName and document.getElementById methods you will recieve an HTMLElementCollection, but if you use the newrr document.querySelector and document.querySelectorAll methods for your DOM node selection, you will actually recieve back a different type of object -- a NodeList https://developer.mozilla.org/en-US/docs/Web/API/NodeList.

```js
const paragraphsToHide = document.querySelectorAll("p.hide");
paragraphsToHide.forEach(para => para.hidden = true);
// no error

```

Problem solved, right? Not exactly. Though there are now better ways to select nodes using queryselectors, there are sill many methods that have not been updated to return nodeLists, so you will still have to interact with them in your job as a web developer. For example document.forms, which return the form elements on the web page, returns an HTMLCollection instead of a NodeList.

# How Do I Use an HTMLCollection When I Have To?

The first is to use a for...of loop. This looks similar to a for loop, but it has a slightly more compact and easy to use syntax.

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

