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
const scroll_top = document.getElementById("scroll_top");

  window.addEventListener("scroll", () => {
    if (document.documentElement.scrollTop > 200) {
      scroll_top.style.display = "block";
    } else {
      scroll_top.style.display = "none";
    }
  });

  scroll_top.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
  const toggle = document.getElementById("darkModeToggle");
  const icon = document.getElementById("darkModeIcon");

  // تحميل الوضع المحفوظ
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
    toggle.checked = true;
    icon.classList.replace("bi-moon-fill", "bi-sun-fill");
  }

  toggle.addEventListener("change", function () {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
      icon.classList.replace("bi-moon-fill", "bi-sun-fill");
      localStorage.setItem("theme", "dark");
    } else {
      icon.classList.replace("bi-sun-fill", "bi-moon-fill");
      localStorage.setItem("theme", "light");
    }
  });