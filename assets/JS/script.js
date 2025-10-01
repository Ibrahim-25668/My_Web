const filterBtns = document.querySelectorAll(".filter-btn");
const cards = document.querySelectorAll(".badge-container .card");

filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        const category = btn.getAttribute("data-category");

        filterBtns.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        cards.forEach(card => {
            const categories = card.getAttribute("data-category").split(" ");
            if (category === "all" || categories.includes(category)) {
                card.classList.remove("d-none");
            } else {
                card.classList.add("d-none");
            }
        });
    });
});
