document.addEventListener('DOMContentLoaded', function() {
  // View Live Map - Smooth scroll
  document.getElementById("btnViewMap").addEventListener("click", () => {
    document.getElementById("map").scrollIntoView({ behavior: "smooth" });
  });

  // Track Vehicles - New tab
  document.getElementById("btnTrackVehicles").addEventListener("click", () => {
    window.open("../track/track.html", "_blank");
  });

  // Navbar smooth scrolling
  document.querySelectorAll('.nav-link[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
        document.querySelector('.nav-link.active').classList.remove('active');
        this.classList.add('active');
      }
    });
  });
});