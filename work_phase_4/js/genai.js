//flip card
document.querySelectorAll(".card").forEach((card) => {
    card.addEventListener("click", () => {
        const inner = card.querySelector(".card-inner");
        inner.classList.toggle("is-flipped");
    });
});
