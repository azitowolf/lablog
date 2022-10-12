---
title: The JS Cheatsheet
metatitle: tinycode | The JS Cheatsheet
subtitle: For the Professional Web Developer
categories: ["cheatsheet", "js"]
---

# {{title}}
# {{subtitle}}

1. Scroll to the top/bottom of the page
We can use window.scrollTo() to scroll smoothly to the top of the page.

```js
const scrollToTop = () => {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
};
```

2. Scroll elements to the visible area
Sometimes we need to scroll elements to the visible area, what should we do? Using scrollIntoView is enough.

```js
const smoothScroll = (element) => {
  element.scrollIntoView({
    behavior: "smooth",
  });
};
```

4. Display the element in fullscreen mode
You must have encountered such a scenario, where you need to play the video in full screen and open the page in full screen in the browser.

```js
const goToFullScreen = (element) => {
  element = element || document.body;
  if (element.requestFullscreen) {
    element.requestFullscreen();
  } else if (element.mozRequestFullScreen) {
    element.mozRequestFullScreen();
  } else if (element.msRequestFullscreen) {
    element.msRequestFullscreen();
  } else if (element.webkitRequestFullscreen) {
    element.webkitRequestFullScreen();
  }
};
```


5. Exit browser full-screen state
Yes, this is used with the fourth point, you will also have the scenario of exiting the full-screen state of the browser.

```js
const goExitFullscreen = () => {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.msExitFullscreen) {
    document.msExitFullscreen();
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  }
};
```


6. Get the type of data
How to get the data type of a variable by a function?

```js
const getType = (value) => {
  const match = Object.prototype.toString.call(value).match(/ (\w+)]/)
  return match[1].toLocaleLowerCase()
}

getType() // undefined
getType({}}) // object
getType([]) // array
getType(1) // number
getType('fatfish') // string
getType(true) // boolean
getType(/fatfish/) // regexp
```


6. Stop bubbling events
A method for preventing event bubbling that works on all platforms is necessary.

```js
const stopPropagation = (event) => {
  event = event || window.event;
  if (event.stopPropagation) {
    event.stopPropagation();
  } else {
    event.cancelBubble = true;
  }
};
```


7. Deep copy an object
How do you copy a deeply nested object?

```js

```


8. Determining the type of device
We often have to do this to show A logic on the phone and B logic on the PC. Basically, the device type is determined by recognizing the userAgent of the browser.

```js

const isMobile = () => {
  return !!navigator.userAgent.match(
    /(iPhone|iPod|Android|ios|iOS|iPad|Backerry|WebOS|Symbian|Windows Phone|Phone)/i
  );
};
```


9. Determine if the device is Android or IOS
In addition to distinguishing whether it is mobile or PC, many times we also need to distinguish whether the current device is Android or IOS.

```js
const isAndroid = () => {
  return /android/i.test(navigator.userAgent.toLowerCase());
};

const isIOS = () => {
  let reg = /iPhone|iPad|iPod|iOS|Macintosh/i;
  return reg.test(navigator.userAgent.toLowerCase());
};
```


10. Get the type of browser and its version
As a front-end developer, you may encounter various compatibility issues. At this time, you may need to obtain the type and version of the browser.

```js
const isAndroid = () => {
  return /android/i.test(navigator.userAgent.toLowerCase());
};

const isIOS = () => {
  let reg = /iPhone|iPad|iPod|iOS|Macintosh/i;
  return reg.test(navigator.userAgent.toLowerCase());
};
```


11. Set cookies
The cookie is probably the worst API I’ve ever seen, it’s so hard to use that we had to re-encapsulate it to maximize our development efficiency.

```js
const setCookie = (key, value, expire) => {
  const d = new Date();
  d.setDate(d.getDate() + expire);
  document.cookie = `${key}=${value};expires=${d.toUTCString()}`;
};
```


12. Get cookies
In addition to writing to the cookie, we will also be involved in its read operation.

```js
const getCookie = (key) => {
  const cookieStr = unescape(document.cookie);
  const arr = cookieStr.split("; ");
  let cookieValue = "";
  for (let i = 0; i < arr.length; i++) {
    const temp = arr[i].split("=");
    if (temp[0] === key) {
      cookieValue = temp[1];
      break;
    }
  }
  return cookieValue;
};
```


13. Delete cookies
What is the idea of deleting a cookie? Actually, just set its expiration time to this moment and it will expire immediately.

```js
const getCookie = (key) => {
  const cookieStr = unescape(document.cookie);
  const arr = cookieStr.split("; ");
  let cookieValue = "";
  for (let i = 0; i < arr.length; i++) {
    const temp = arr[i].split("=");
    if (temp[0] === key) {
      cookieValue = temp[1];
      break;
    }
  }
  return cookieValue;
};
```


14. Generate a random string
I don’t know if you have ever encountered a scenario where you need to generate a random string. I have encountered it many times, and every time I have to google it again until I learn this tool function.

```js
const randomString = (len) => {
  let chars = "ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz123456789";
  let strLen = chars.length;
  let randomStr = "";
  for (let i = 0; i < len; i++) {
    randomStr += chars.charAt(Math.floor(Math.random() * strLen));
  }
  return randomStr;
};

randomString(10) // pfkMfjEJ6x
randomString(20) // ce6tEx1km4idRNMtym2S
```


15. Capitalize the first letter of the string
```js
const fistLetterUpper = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

fistLetterUpper('fatfish') // Fatfish
```

16. Generate random numbers in a specified range
Maybe for testing purposes, I often need to generate random numbers within a certain range.

```js
const randomNum = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

randomNum(1, 10) // 6
randomNum(10, 20) // 11
```


17. Shuffle the order of an array
How to shuffle the original order of the array?

```js
const shuffleArray = (array) => {
  return array.sort(() => 0.5 - Math.random())
}

let arr = [ 1, -1, 10, 5 ]

shuffleArray(arr) // [5, -1, 10, 1]
shuffleArray(arr) // [1, 10, -1, 5]
```


18. Get a random value from an array
I have done a lottery project before, and I need to make the prizes in the array appear randomly.

```js
const getRandomValue = array => array[Math.floor(Math.random() * array.length)]; 
const prizes = [  '$100', '🍫', '🍔' ]

getRandomValue(prizes) // 🍫
getRandomValue(prizes) // 🍔
getRandomValue(prizes) // 🍫
```


19. The first way to format money
Sourced from here.

```js
const formatMoney = (money) => {
  return money.replace(new RegExp(`(?!^)(?=(\\d{3})+${money.includes('.') ? '\\.' : '$'})`, 'g'), ',')  
}

formatMoney('123456789') // '123,456,789'
formatMoney('123456789.123') // '123,456,789.123'
formatMoney('123') // '123'
```

There are many ways to format money, such as these two ways.


20. The second way to format money
Sourced from here.

```js
const formatMoney = (money) => {
  return money.toLocaleString()
}

formatMoney(123456789) // '123,456,789'
formatMoney(123456789.123) // '123,456,789.123'
formatMoney(123) // '123'
```

Regular expressions give us too much headache, don’t they? So we need to find an easier way to format money.


