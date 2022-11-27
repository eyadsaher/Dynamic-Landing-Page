// variable to store all sections in a data structure
const sections = Array.from(document.querySelectorAll("section"));

// variable to store the nav bar list
const navList = document.getElementById("navbar__list");

// Function to dynamically create a navigation menu based on the sections of the page
function createListItem() {
  for (sec of sections) {
    listItem = document.createElement("li");
    listItem.innerHTML = `<li><a href="#${sec.id}" data-nav="${sec.id}" class="menu__link">${sec.dataset.nav}</a></li>`;
    navList.appendChild(listItem);
  }
}

// function to Add functionality to distinguish the section in view.
createListItem();
window.onscroll = function () {
  document.querySelectorAll("section").forEach(function (active) {
    if (
      active.getBoundingClientRect().top >= -400 &&
      active.getBoundingClientRect().top <= 150
    ) {
      active.classList.add("your-active-class");
    } else {
      active.classList.remove("your-active-class");
    }
  });
};

// scrolling when click on the navigation menu method
navList.addEventListener("click", (toSec) => {
  toSec.preventDefault();
  if (toSec.target.dataset.nav) {
    document
      .getElementById(`${toSec.target.dataset.nav}`)
      .scrollIntoView({ behavior: "smooth" });
  }
});




