const activities = document.querySelectorAll(".activities_container-element");
const showMoreBut = document.getElementById("activities_show-more");

showMoreBut.addEventListener("click", (e) => {
  e.preventDefault();

  activities.forEach((item) => {
    item.classList.remove("hidden-element");
  });
  showMoreBut.classList.add("activities_show-more-hidden");
});
