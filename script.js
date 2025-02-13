const messages = [
    "Bist du sicher?",
    "Wirklich sicher??",
    "Sicher???",
    "Mausi bitte...",
    "...",
    "Wenn du nein sagst, werde ich sehr traurig sein...",
    "Ich werde sehr traurig sein...",
    "Ich werde sehr sehr traurig sein...",
    "Ok, ich würde aufhören...",
    "War ein Witz, sag einfach ja, bitti ❤️"
];
const images = [
    "imgs/1.gif",
    "imgs/2.gif",
    "imgs/3.gif",
    "imgs/4.gif",
    "imgs/5.gif",
    "imgs/6.gif",
    "imgs/7.gif",
    "imgs/8.gif",
];

let messageIndex = 0;
let imageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    const image = document.querySelector('.kit');
    noButton.textContent = messages[messageIndex];
    image.src = images[imageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    imageIndex = (imageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}