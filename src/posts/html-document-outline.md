---
title: The HTML Document Outline
metatitle: tinycode | The HTML Document Outline
subtitle: Semantic HTML Basics
categories: ["HTML", "Longform"]
mediumurl: https://tinycode.medium.com/the-html-document-outline-c613cc2fc80d
---

# {{title}}
# {{subtitle}}

When you create a webpage you are ultimately organizing data that will be presented to user agents (Web Browsers, RSS Feeds, Screen readers, Etc.).

The document outline is a **visual/written interpretation** of how the data on your page will be understood by browsers and search engines, two of the most prolific user agents.

![image](https://miro.medium.com/max/1400/0*WzkztsMTU6VlUc77)
> credit:https://unsplash.com/@pavan_nicola

# What Does it look like? 
It is commonly written as a tree-list of semantic topics and sub-topics that make up your content, breaking down the information into smaller and smaller chunks. For example, the wikipedia page for the Lord of the Rings has a document outline that looks like this:

```txt
[document]The Lord of the Rings
├── [h2]Contents
└── [h2]Plot[edit]
    └──[h3]The Fellowship of the Ring[edit]
        ├──[h4]Prologue[edit]
        ├──[h4]Book I: The Ring Sets Out[edit]
        └──[h4]Book II: The Ring Goes South[edit]
```
If you want to visualize the document outline of any webpage in this way, you can use a copy/paste tool like this one, or you can download a chrome extension to help you visualize it. For example, the header tree for chrome shows me the outline of the Stranger Things IMDB entry like so:

![image](https://miro.medium.com/max/1360/1*IGRv8u2c-B_H2-by5NKIDA.png)

# Why This is Important
Document outlines for some of the most prominent websites on the internet are broken. Even Amazon.com does not organize their content thoughtfully, leaving more semantic understanding to the web crawlers that are trying to decipher them. This can lead to unpredictable SEO results, difficulty for screen readers to understand, and poor website organization. But don't fear, if you write your HTML content thoughtfully then you should have no problem building an understandable document outline.

# The Document Outline Algorithm and a Decade of Confusion
For many years there has been a major discrepancy between the HTML5 specification and the actual implementation of the document outline algorithm supported by browsers that has caused a lot of misunderstanding.


This discrepancy was that the spec described header levels being reusable within sections (this would mean that an h1 tag within a section would be scoped to only that section, and you could build reusable HTML components much more easily) but sadly this has never been implemented so it is recommended to scope all of your headers to the document (meaning only one h1 tag per page). This PR describes the rejection of the decade long push for truly scoped headings.

# A Simple Document Outline Using Header Tags
The HTML spec describing the document outline gives us the following example:

```html
<!--the following HTML markup-->
<body>
  <heading id="document-title">
    <h1>HTML: Living Standard</h1>
    <p>Last Updated 12 August 2016</p>
  </heading>
  <p>Some intro to the document.</p>
  <h2>Table of contents</h2>
  <ol id=toc>…</ol>
  <h2>First section</h2>
  <p>Some intro to the first section.</p>
</body>

<!--…results in 3 document headings:-->
<h1>HTML: Living Standard</h1>
<h2>Table of contents</h2>.
<h2>First section</h2>.
```

The above markup results in an outline that looks like this:

```txt
HTML: Living standards
├── Table of content
└── First section
```
In a simple document it is perfectly acceptable to have all of your h tags at the same level, and use a more specific header tag (h2, h3, etc..) for more specific topics. In that case, it is assumed that the header describes the content below it. A more complex document though, might want more flexibility to define sections of content that are related.

# Sections + Sectioning Content
In the code example below, we have image content positioned above and below the header "About Lord of The Rings". It would be nice to have a way to tell the document outline that the image, as well as the small text, are all part of the second header. That is where sections come into play.

```html
<body>  
  <h1>Lord of the Rings Fan Site</h1>
  <img src="lotr.com/about-lotr-image.jpg" />
  <h2>About Lord of the Rings</h2>
  <small>An Epic Adventure</small>
  <p>The Lord of the Rings is an epic high fantasy novel written by J.R.R. Tolkien, which was later fitted as a trilogy. The story began as a sequel to Tolkien's earlier fantasy book The Hobbit, and soon developed into a much larger story.</p>
</body>
```

# Sectioning Content
"Sectioning Content" elements are: `<article>`, `<aside>`, `<nav>`, and obviously `<section>`.
Sectioning content is a category of element that defines the scope of a header element (h1, h2, … h6). This means that headers within a section are assumed to apply to the nearest section.

# Using Sections
Let's re-write the example above using sections. We can denote the content area using a `<section>` tag, and any content within the section is assumed to belong to the section whose title is "About the Lord of the Rings" meaning our related image can be added anywhere within the tag. For increased semantics I've placed a header tag around the header content of both the top level and second level sections.

```html
<body>
  <header>
    <h1>Lord of the Rings Fan Site</h1>
  </header>
  <section>
    <img src="lotr.com">
    <header>
      <h2>About Lord of the Rings</h2>
      <small>An Epic Adventure</small>
    </header>
    <p>The Lord of the Rings is an epic high fantasy novel written by J.R.R. Tolkien, which was later fitted as a trilogy. The story began as a sequel to Tolkien's earlier fantasy book The Hobbit, and soon developed into a much larger story.</p>
  </section>
</body>
```

Creating an intelligible information hierarchy is one of the most fundamentally important topics in web development, and it's possibly the most integral pillar of semantic HTML. Spend some time reading the specification here, and check out this awesome course for more an even deeper dive.