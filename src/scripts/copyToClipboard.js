let preElements = document.querySelectorAll('pre');

console.log('running - ', preElements);

preElements.forEach(node => {
    let copyButton = document.createElement('button');
    copyButton.innerText = "Copy";
    copyButton.classList.add('copy-button')
    copyButton.addEventListener('click', (event) => {
        const cb = navigator.clipboard;
        console.log(cb);
        const closestCodeTag = event.target.closest('pre').querySelector('code');
        const textToCopy = closestCodeTag.innerText;
        cb.writeText(textToCopy).then(() => {
            copyButton.innerText = "Copied!"
            setTimeout(()=>{
                copyButton.innerText = "Copy"
            }, 1000)
        });
        cb.readText().then((string)=>console.log(string))
    })
    node.appendChild(copyButton);
})
