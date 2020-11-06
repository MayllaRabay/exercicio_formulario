const button1 = document.querySelector(".button-resolucao-1");
const spoiler1 = document.querySelector(".spoiler-resolucao-1");

button1.addEventListener("click", () => {
    spoiler1.toggleAttribute("hidden");
});

const button2 = document.querySelector(".button-resolucao-2");
const spoiler2 = document.querySelector(".spoiler-resolucao-2");

button2.addEventListener("click", () => {
    spoiler2.toggleAttribute("hidden");
});