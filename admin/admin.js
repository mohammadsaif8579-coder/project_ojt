// Get elements
const filterButtons = document.querySelectorAll(".filter-btn");
const vehicleCards = document.querySelectorAll(".vehicle-card");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Set active button
    filterButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    const filter = button.getAttribute("data-filter");

    vehicleCards.forEach((card) => {
      const status = card.getAttribute("data-status");

      // If matches filter or "all"
      if (filter === "all" || filter === status) {
        // If hidden, bring it back smoothly
        if (card.classList.contains("hidden")) {
          card.classList.remove("hidden");
          card.style.display = "block";
          requestAnimationFrame(() => {
            card.classList.add("fade-in");
          });
        }
      } else {
        // Hide smoothly
        card.classList.remove("fade-in");
        card.classList.add("fade-out");

        // After animation ends, remove from layout
        card.addEventListener(
          "transitionend",
          () => {
            if (card.classList.contains("fade-out")) {
              card.classList.add("hidden");
              card.style.display = "none";
            }
          },
          { once: true }
        );
      }
    });
  });
});