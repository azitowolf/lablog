---
title: The `<kbd>` Element
subtitle: For Emphasizing Written Content
metatitle: tinycode | The <kbd> Element
categories: ["HTML", "Shortform"]
---

# {{title}}
## {{subtitle}}

This element represents expected user input into the webpage. For example: 

```html
To print your screen, 
press <kbd>ctrl</kbd> + <kbd>alt</kbd> + <kbd>3</kbd>
```

Will create an output like so: 

press <kbd>ctrl</kbd> + <kbd>alt</kbd> + <kbd>3</kbd>

The default style output of this element is a monospace font, though you can add your own custom styles. 

## Common Use Cases
The first common use case is to describe keys that the user should press to interact with your webpage. This would be especially important if you are building a “hotkey” page, for example, but it could be used in many scenarios, like a game that needs to explain commands, or a tooltip that shows users how to use your website.

This element is often used with the `<samp>` element, which represents “echoed” output from a computer. An example of this would look like the following:

The command that you entered is <samp><kbd>exit application<kbd></samp> is this correct?

You would imagine that there are many cases where you might need to use this format, especially when building more technical applications that need to display computer output and instructions back to the user simultaneously.

## Special Attributes

The `<kbd>` element takes the “translate” attribute, which tells user agents whether or not this content should be translated. This should be respected by the autotranslate features in major web browsers and is very important because it’s very unlikely that you’ll want to translate computer commands which should be the same across languages. The HTML spec provides this example:


```html
<p>When the game launches, the first thing you should do is type
<kbd translate=no>eat honey</kbd>. The game will respond with:</p>
```

## Categories

The `<kbd>` element is primarily phrasing content, though it also falls into “flow” and “palpable” categories with most other elements. This means that it is most likely used inside of a `<p>` element as part of a paragraph of text.