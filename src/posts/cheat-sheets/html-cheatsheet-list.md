---
title: Lists | HTML CheatSheet 
metatitle: tinycode | The Ultimate HTML Cheatsheet | Lists
---

# {{title}}
## {{subtitle}}

## Types of Lists in HTML
1. Ordered Lists (`<ol>`)
2. Unordered Lists (`<ul>`)
3. Description Lists (`<dl>`)

## Ordered Lists (`<ol>`)

Ordered lists are defined with the `<ol>` tag. They represent list content in which order matters. An example might be a list of cooking steps in a recipe, or a list of directions in a map application. 

## Examples

```html
<h2>Cake Directions</h2>
<ol>
  <li>Turn on oven at 350 degrees</li>    
  <li>Mix Batter</li>    
  <li>Pour into tray</li>    
  <li>Bake for 45 minutes</li>    
<ol>

<h2>Grocery To Home</h2>
<ol>
  <li>Turn right on Main St.</li>
  <li>Drive 2 miles</li>
  <li>Turn left on Reginald St.</li>
  <li>After 500 feet, your destination will be on the left</li>
</ol>  
```
Default Styles:

![ordered list styles](/img/2022-09-19-21-49-29.png)

## Attributes

1. `type`: this attribute allows you to change the numberinng type (the default is numbers, 1, 2, 3, etc...)
2. `start`: this attribute allows you to change the start number, if you pass a 4 to the element then the list will start at 4.
3. `reverse`: this will reverse the numbering.

## Unordered Lists (`<ul>`)

Unordered lists are defined with the `<ul>` tag. They represent list content in which order does not matter. A example might be a packing list, or a list of skills on a resume. Any content in which the grouping of the content within is important, but the order is not. 

## Examples

```html
  <h2>Packing List</h2>
  <ul>
      <li>Shoes</li>    
      <li>Sunglasses</li>    
      <li>Underwear</li>    
      <li>Socks</li>    
  </ul>

  <h2>Business Ideas</h2>
  <ul>
      <li>Dog sweater business</li>    
      <li>Subscription origami service</li>    
      <li>Solar Power</li>
      <ul>
          <li>Solar-powered shoes</li>    
          <li>Solar-powered bicycles</li> 
      </ul>
      <li>Socks with baby-yoda pattern</li>    
  </ul>

```

Default Styles:

![unordered list](/img/XXXXX.png)

## Attributes

1. `type`: this attribute allows you to change the numberinng type (the default is round bullets,as shown above)

## Description Lists (`<dl>`)

Description lists are defined with the `<dl>` tag. They represent list content in which there is a list of definitions or descriptions.

## Use Cases

An iconic example might be a dictionary, with a list of terms and their definitions listed in order. Another example could be a data list, where you are listing the statistics for a character in a game.

## Examples

```html
<h2>dictionary</h2>
<dl>
  <dt>Boat</dt>
  <dd>a small vessel propelled on water by oars, sails, or an engine.</dd>  
  <dt>Tree</dt>
  <dd>a woody perennial plant, typically having a single stem or trunk growing to a considerable height and bearing lateral branches at some distance from the ground.</dd>  
  <dt>Dinosaur</dt>
  <dd>a fossil reptile of the Mesozoic era, in many species reaching an enormous size.</dd>    
</dl>
<h2>Bulbasaur</h2>
<dl>
  <dt>Health</dt>    
  <dd>14</dd>  
  <dt>Damage</dt>    
  <dd>2</dd>  
  <dt>Speed</dt>    
  <dd>8</dd>
  <dt>Abilities</dt>
    <dd>
      <ul>
        <li>vine whip</li>
        <li>tackle</li>
      </ul>
    <dd>      
</dl>
```

Default Styles:

![description list](/img/2022-09-19-22-04-48.png)

## Attributes

None. This element only contains the global HTML attributes.

## Other Information

The `<dt>` element defines a "term" or "key" for the item in the list, and the `<dd>` is the "definition" or "value" for that item.

The `<dd>` does not need to contain simple text but could contain another list, or other content like an image.

The `<dt>` and `<dd>` elements do not need to be paired one-to-one, meaning you could have a term that has several definitions, or a definition that has many terms.
