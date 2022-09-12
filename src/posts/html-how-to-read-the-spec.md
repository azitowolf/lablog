---
metatitle: tinycode | How To Read the HTML Spec
title: How To Read the HTML Spec
subtitle: A guide for Web Developers
categories: ["HTML", "Longform"]
---

# {{title}}
## {{subtitle}}

# What is the HTML Specification
The specification is a document that defines all of the rules of HTML, Hypertext... It defines, for example, all of the metadata that should be allowed on every page webpage on the internet. It also defines every single HTML "Tag" that can be used in the body of those webpages. It is because of this specifiction, for example, that `<dog>` does not exist as a meaningful element, while `<p>` does.

> Note: I am aiming to describe terms and methods for reading the HTML specification, which is different than the DOM specification and does not have much crossover. The HTML spec is focused around the definition of valid, or "conforming" HTML documents.

# Why it is important
Because this spec is so incredibly influential, it is a good idea to spend some time reading it. At the very least it is a good idea to know *how* to read it, so that you can look to the documentation the next time you are in need of an answer.

# Learning to use the document
The HTML specification is one of the most important and leas understood pieces of documentation involved in web development. The document has been modified recently with a new look and feel, but the contents are still as mercurial as ever. I'll explain a few of the main concepts involved in reading the spec below, to hopefully give you a better understanding of what to look for when you endeavor to read it yourself.

# Terms
Terms are very important in the doc. Here are some of the most important ones:

1. Elements: The most basic way to define a meaningful group of content inside your document. For example: `<p></p>` 
2. Categories: The spec defines categories of elements, for example "sectioning content" and "metadata content" and these categories are very important in terms of the interactions between elements
3. Content Model: The content model is the list of different categories of content that can be nested inside of a given element. For example, the `<p>` tag can have other "phrasing" content inside of it, but not "sectioning content"
4. Conforming: This means that the text is "valid" in the current specification. You can confirm that your HTML document is conforming using the following [website](https://validator.w3.org/).

# How to read the Spec
First things first - Google Your Shit. If you are working through your document and think that you might be able to replace a tag with a more specific one, just google to make sure. just the following search "html element for making up dates" will lead you to a depth of knowledge on the topic, likely in the HTML spec itself or in secondary sources like MDN.

Next, you sohuld understand the categories(https://html.spec.whatwg.org/dev/dom.html#content-categories) of elements that are available to you. Then when you begin to mark up your document you will know where to look in the specification for the type of tag you need. For example, when you need to look up anything related to the high level document organization you will know to look in the "sectioning content" category for more information.

The section that I spend the most time in is this one: https://html.spec.whatwg.org/dev/semantics.html#semantics (INCLUDE IMAGE) which defines the majority of the elements themselves, as well as their attributes and content models.

Once there, I usually just search for the element that I think I'll be working with, for example, `<em>` nd then navigate to that section of the spec. 

After that I take some time to read about the elements inteded purpose (because often this is actually very diggerent from how it is used on the web) and then its content model and any attributes taht it mibht have that could be useful. For more interactive elements that mave many complex attributes, like the `<audio>` element, I will ususally go to MDN for more information because theie structure is easier to understand.