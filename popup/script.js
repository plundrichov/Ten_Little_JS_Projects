const btnOpen = document.getElementById("open");
const btnClose = document.getElementById("close");
const container = document.getElementById("container");

btnOpen.addEventListener("click", () => {
  container.classList.add("active");
});

btnClose.addEventListener("click", () => {
  container.classList.remove("active");
});
