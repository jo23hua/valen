document.getElementById('noButton').addEventListener('click', showImageAndIncreaseSize);
document.getElementById('yesButton').addEventListener('click', changeImage);

function showImageAndIncreaseSize() {
    let valentineImage = document.getElementById('valentineImage');
    valentineImage.style.display = "block"; // Show the image
    let currentWidth = valentineImage.width;
    let newWidth = currentWidth + 50;
    valentineImage.style.width = newWidth + "px";
    valentineImage.style.transition = "width 0.5s ease-in-out"; // Smooth transition
    let yesButton = document.getElementById('yesButton');
    let currentSize = window.getComputedStyle(yesButton).fontSize;
    let newSize = parseInt(currentSize) + 10 + "px";
    yesButton.style.fontSize = newSize;
    yesButton.textContent = "PLZ SAY YES :(";
    yesButton.onclick = function() {
        document.body.innerHTML = "<h1>See you tomorrow!</h1>";
    };
}

function changeImage() {
    let valentineImage = document.getElementById('valentineImage');
    valentineImage.style.display = "none"; // Hide the first image
    let newValentineImage = document.getElementById('newValentineImage');
    newValentineImage.style.display = "block"; // Show the new image
}
