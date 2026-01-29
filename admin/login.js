document.getElementById("loginBtn").addEventListener("click", () => {
  const user = document.getElementById("username").value.trim();
  const pass = document.getElementById("password").value.trim();
  const error = document.getElementById("errorMsg");

  if (user != "" && pass != "") {
    window.location.href = "dashboard.html";
  } else {
    error.textContent = " Invalid username or password";
  }
});