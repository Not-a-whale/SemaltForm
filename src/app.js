import "./scss/base.scss";
import "./js/calendar";
import data from "./js/fetchData";

console.log(data);

const filters = document.querySelectorAll(".filters__select");
const filtersList = document.querySelectorAll(".filters__list");
const filtersInput = document.getElementById("filtersInput");
const filterCheckboxes = document.querySelectorAll(".fliters__list--checkbox");
const resetCheckboxesButton = document.getElementById("sitemapSelectReset");
const applyCheckboxesButton = document.getElementById("sitemapSelectApply");
const filtersTypes = document.getElementById(".filters__types");
const filtersSubmited = document.getElementById(".filters__submited");
const filtersSitemaps = document.getElementById(".filters__sitemaps");
const dateString = document.querySelector(".date__selected-date");
export const statusElements = document.querySelectorAll(".status");
export const tableBody = document.getElementById("tableBody");
function UIController() {
  let activeDropdown = null; // Current active dropdown value
  filtersInput.addEventListener("click", function () {
    filtersList[0].style.display = "block";
  });

  resetCheckboxesButton.addEventListener("click", function () {
    for (let i = 0; i < filterCheckboxes.length; i++) {
      filterCheckboxes[i].checked = false;
    }
    filtersList[0].style.display = "none";
  });

  applyCheckboxesButton.addEventListener("click", function () {
    filtersList[0].style.display = "none";
  });

  for (let i = 0; i < filters.length; i++) {
    filters[i].addEventListener("click", function () {
      if (this.classList.contains("filters__date")) {
        this.classList.toggle("filter-date__focus");
      } else {
        this.classList.toggle("filter-input__focus");
        activeDropdown = this; // Current active dropdown value
      }
    });
  }
  document.addEventListener("click", function (e) {
    if (e.target == activeDropdown && activeDropdown.children[0]) {
      for (let i = 0; i < activeDropdown.children[0].children.length; i++) {
        activeDropdown.children[0].children[i].addEventListener(
          "click",
          function () {
            activeDropdown.textContent = this.textContent;
          }
        );
      }
    }
  });
  function truncateString(str, num) {
    if (str.length <= num) {
      return str;
    }
    return str.slice(0, num) + "...";
  }
  dateString.textContent = truncateString(dateString.textContent, 14);
} /* UI Controller function ends */

UIController();
