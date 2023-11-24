

  document.addEventListener("DOMContentLoaded", function () {
  const article = document.querySelector(".article");
  const progressBar = document.getElementById("reading-progress-bar");

  let isReading = false;

  window.addEventListener("scroll", function () {
  if (!isReading) {
  isReading = true;
  progressBar.style.display = "block";
}

  const scrollPosition = window.scrollY;
  const articleHeight = article.clientHeight - window.innerHeight;
  const progress = (scrollPosition / articleHeight) * 100;

  progressBar.style.width = `${progress}%`;

});
});

  const toTop = document.querySelector(".to-top");
  window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
  toTop.classList.add("active");
} else {
  toTop.classList.remove("active");
}
})



