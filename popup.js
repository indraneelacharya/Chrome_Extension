if(typeof document != "undefined"){
    const button = document.querySelector(".button");
    const circle = document.querySelector(".circle")
    let buttonOn = false;
    function invert() {
        alert("hi")
        document.body.style.filter = "invert(1) hue-rotate(180deg)";
        let media = document.querySelectorAll("img, picture, video");
        media.forEach((mediaItem) => {
            mediaItem.style.filter = "invert(1) hue-rotate(180deg)"
        })
    }
    button.addEventListener("click", () => {
        if (!buttonOn) {
            buttonOn= true;
            const tab = chrome.tabs.get(tabId);
            circle.style.animation = "move_circle_right 1s forwards";
            button.style.animation = "backgroundyellow 1s forwards";
            chrome.scripting.executeScript({
                target: {tabId: tab, allFrames: true},
                files: ['appOn.js'],
            });
        }
        else {
            buttonOn = false;
            const tab = chrome.tabs.get(tabId);
            circle.style.animation = "move_circle_left 1s forwards";
            button.style.animation = "backgroundblue 1s forwards";
            chrome.scripting.executeScript({
                target: {tabId: tab, allFrames: true},
                files: ['appOff.js'],
            });
        }
    })

}