---
title: The Ultimate HTML Cheatsheet
metatitle: tinycode | The Ultimate HTML Cheatsheet
subtitle: For the Professional Web Developer
categories: ["HTML", "Cheatsheet"]
---

# {{title}}
## {{subtitle}}

1. Headers
Headers are used to indicate the information hierarchy of a page. There should only be one h1

```html
<h1>About Lord of the Rings</h1>
    <h2>Lord of the Rings Plot Overview</h2>
        <h3>The Fellowship of the ring</h3>
            <h4>Leaving the Shire</h4>
            <h4>Weathertop</h4>
        <h3>The Two Towers</h3>
            <h4>The Battle at Isenguard</h4>
            <h4>Shelobs lair</h4>        
        <h3>The Return of the King</h3>
            <h4>Leaving the Shire</h4>
            <h4>Weathertop</h4>        
```

2. List Types
There are 3 types of lists:
1. Ordered Lists (`<ol>`)
2. Unordered Lists (`<ul>`)
3. Description Lists (`<dl>`) 

```html

<h1>Car for Sale</h1>

<section>
    <h2>Details</h2>
    <dl>
        <dt>Make</dt><dd>Toyota</dd>
        <dt>Model</dt><dd>Corolla</dd>
        <dt>Year</dt><dd>2010</dd>  
    </dl>

</section>

<section>
    <h2>Repair History</h2>
    <ol>
        <li>New Brakes (2020)</li> 
        <li>New Muffler (2021)</li>
        <li>New Tires (2022)</li>
    </ol>

</section>

<section>
    <h2>Reasons to Buy</h2>
    <ul>
        <li>Well-maintained</li>
        <li>Low miles</li>
        <li>Custom speaker system</li>
    </ul>

</section>

<section>
    <h2>Contact Me</h2>
    <address>
        <dl>
            <dt>Phone</dt><dd>555-555-1111</dd>
            <dt>E-mail</dt><dd>noreply@google.com</dd>
        </dl>        
    </address>
</section>

```

3. To Be Continued... 