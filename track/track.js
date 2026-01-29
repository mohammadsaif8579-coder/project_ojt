const trackBtn = document.getElementById("trackBtn");
const trackInput = document.getElementById("trackInput");
const trackResult = document.getElementById("trackResult");
const trackError = document.getElementById("trackError");

trackBtn.addEventListener("click", () => {
  const input = trackInput.value.trim().toUpperCase();
  trackError.textContent = "";

  if (!input) {
    trackError.textContent = " Please enter a shipment or vehicle ID.";
    return;
  }

  if (input === "SHP-4521" || input === "VEH-001") {
    trackResult.style.display = "block";
    animateTruck();
  } else {
    trackError.textContent = " Shipment not found.";
    trackResult.style.display = "none";
  }
});

function animateTruck() {
  const truck = document.querySelector(".truck");
  truck.style.left = "25%";
  setTimeout(() => (truck.style.left = "70%"), 200);
}