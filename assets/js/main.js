function logout() {
  localStorage.removeItem("token");

  alert("You have been logged out successfully.");

  window.location.href = "index.html";
}