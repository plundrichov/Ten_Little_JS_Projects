const btn = document.getElementById("btn");
const nav = document.getElementById("nav");

let isOpen = false;

btn.addEventListener("click", () => {
  nav.classList.toggle("active");
  btn.classList.toggle("active");
  isOpen ? (isOpen = false) : (isOpen = true);
  isOpen ? (btn.innerHTML = "✕") : (btn.innerHTML = "☰");
});
