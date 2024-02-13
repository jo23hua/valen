document.getElementById('noButton').addEventListener('click', increaseSize);
document.getElementById('yesButton').addEventListener('click', seeYouTomorrow);

function increaseSize() {
    let yesButton = document.getElementById('yesButton');
    let currentSize = window.getComputedStyle(yesButton).fontSize;
    let newSize = parseInt(currentSize) + 10 + "px";
    yesButton.style.fontSize = newSize;
    yesButton.textContent = "PLZ SAY YES :(";
    yesButton.onclick = function() {
        document.body.innerHTML = "<h1>See you tomorrow!</h1>";
    };
}

function seeYouTomorrow() {
    document.body.innerHTML = "<h1>See you tomorrow!</h1>";
}
