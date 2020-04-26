const date_picker_element = document.querySelector(".filters__date");
const selected_date_element = document.querySelector(".date__selected-date");
const dates_element_first = document.querySelector("#firstMonth");
const dates_element_second = document.querySelector("#secondMonth");
const mnt_element_first = document.querySelector(".month-1 .mnt");
const mnt_element_second = document.querySelector(".month-2 .mnt");
const next_mnt_element_first = document.querySelector(".month-1 .next-mnt");
const prev_mnt_element_first = document.querySelector(".month-1 .prev-mnt");
const next_mnt_element_second = document.querySelector(".month-2 .next-mnt");
const prev_mnt_element_second = document.querySelector(".month-2 .prev-mnt");
const days_element_first = document.querySelector("#firstMonth .days");
const days_element_second = document.querySelector("#secondMonth .days");

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

let date = new Date();
let day = date.getDate();
let month = date.getMonth();
let year = date.getFullYear();

populateDates(days_element_first);
populateDates(days_element_second);

// Event listeners
/* next_mnt_element_first.addEventListener("click", goToNextMonth); */

function populateDates(daysElement) {
  daysElement.innerHTML = " ";
  let amount_days = 31;
  switch (month) {
    case 1:
      if (year == 2020 || year == 2024 || year == 2028) {
        amount_days = 29;
      } else {
        amount_days = 28;
      }
      break;
    case 3:
      amount_days = 30;
      break;
    case 5:
      amount_days = 30;
      break;
    case 8:
      amount_days = 30;
      break;
    case 10:
      amount_days = 30;
      break;
    default:
      amount_days = 31;
  }

  for (let i = 0; i < amount_days; i++) {
    const day_element = document.createElement("div");
    day_element.classList.add("day");
    day_element.textContent = i + 1;
    daysElement.appendChild(day_element);
  }
}
