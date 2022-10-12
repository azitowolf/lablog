---
title: How to Copy to Clipboard using the 'navigator.clipboard' API
subtitle: Vanilla JS
categories: ["JS", "Shortform"]
mediumurl: https://tinycode.medium.com/copy-text-to-a-users-clipboard-using-the-navigator-clipboard-api-77942ef813f2
---

# {{title}}

The simplest way to copy something to your user's clipboard is with the clipboard API(https://developer.mozilla.org/en-US/docs/Web/API/Navigator/clipboard). You can access this api as follows.

```js
const clipBoard = navigator.clipboard;
```
You'll get access to a handful of methods using this API.

The most commonly used is the clipboard.writeText() method. This method alows you to write to the user's clipboard, typically seen in a "copy text to clipboard" setting. 

You can use this method as follows: 

```js
    clipBoard.writeText(textToCopy).then(() => {
        alert("Copied text to keyboard");
    });
```

You'll notice that the writeText method returns a promise, so you'll be able to use it with async/await syntax as well.

```js
copyToClipboard = async () => {
  try {
    await navigator.clipboard.writeText('text')
    console.log('success')
  } catch (err) {
    console.error('Failed to copy!', err)
  }
}
```

## ReadText

The clipboard.readText() method alows you to rea the contents of a user's clipboard. If you've ever seen a website that asks you if you'd like to copy the contents of your keyboard directly to the website as a task, a search query, etc. they are likely using this API. 

You can call the API as follows

```js
    clipBoard.wreadText(textInClipboard)
    .then(() => {
        alert("The text currently in the users clipboard is: ", textInClipboard);
    })
    .catch((err) => console.error(err));
```

When you call this method, the browser will check if the user has given permmission for your app (denoted by your domain) to read from their clipboard. It will look something like this:

![](/img/2022-10-01-14-37-26.png)

## More Examples
A more realistic use case example mmight be a code snippet section with a copy button. The below text adds a "copy to clipboard" button inside each pre tag on the page.

```js
let preElements = document.querySelectorAll('pre');

preElements.forEach(node => {
    let copyButton = document.createElement('button');
    copyButton.innerText = "Copy";
    copyButton.classList.add('copy-button')
    copyButton.addEventListener('click', (event) => {
        const cb = navigator.clipboard;
        const closestCodeTag = event.target.closest('pre').querySelector('code');
        const textToCopy = closestCodeTag.innerText;
        cb.writeText(textToCopy).then(() => {
            copyButton.innerText = "Copied!"
            setTimeout(()=>{
                copyButton.innerText = "Copy"
            }, 1000)
        });
    })
    node.appendChild(copyButton);
})
```

You can view the output here

https://codepen.io/azitowolf/pen/dyeegBy


## Limitations

One important aspect of the API is that you cannot just call this method outside of a click event. This is a securtity measure to ensure that malicious programs don't copy scripts or other naughtiness onto user's clipboards without their noticing. If you do so you will get a message like this one:

![](/img/2022-10-01-14-49-15.png)

## Browser Support

The navigator and the APIs described abouve (writeText, readText) are both supported in all modern browsers.
https://caniuse.com/?search=navigator.clipboard


