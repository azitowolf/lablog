---
metatitle: tinycode | The <strong> Element
title: The `<strong>` Element
subtitle: Indicate Importance using the `<strong>` element
categories: ["HTML", "Shortform"]
---
# {{title}}
## {{subtitle}}

The `<strong>` element marks text that is econsidered important, urgent, or serious, relative to the surrounding text. 

The HTML Spec defines importance as being used in a heading, caption, or paragraph to distinguish the part that really matters from other parts that might be more detailed, more jovial, or merely boilerplate. 

In the example below, the strong element shows that the chapter text is likely less important that the actual title of the chapter.

```html
    <h1>Chapter 1: <strong>The Praxis</strong></h1>
```
## Using the `<strong>` element:

The primary use case for the strong element is to help show what content is importatnt in a sentance, even if the word order might not indicate that urgency. 

In the below example a reader should read the second half of the sentence first, and the first part of the sentence is a helpful supporting piece of information.

```html
<p> While you are in the airport <strong>Do not leave your luggage unattended</strong></p>
```
Additionally this element helps to deonte content that is less important as much as importance. In the below example the strong element indicates that the Plot text is actually the important section of these subheaders, as opposed to the boilerplate text around it. 

```html
<h2> Lord of the Rings: <strong>Characters</strong></h2>
<h2> Lord of the Rings: <strong>Plot</strong></h2>
```

## "Strong" Element Categories
The `<strong>` element is considered to be "phrasing" content, defined as "the text of the document" and can be used anywhere in the document body where phrasing content is expected. That includes inside header tags, paragraph tags, and any other tag whose 'content model' contains phrasing content.
