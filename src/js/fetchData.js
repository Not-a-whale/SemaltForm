import { makeElements } from "./dataLayout";
import { tableBody, statusElements } from "../app";
const link = "https://semalt.net/dev/api/v1/example/test/";
async function getData(link) {
  try {
    const result = await fetch(link);
    const data = await result.json();
    return data.result;
  } catch {
    alert(error);
  }
}
getData(link).then((array) => {
  let html = makeElements(array.sitemap);

  for (let i = 0; i < html.length; i++) {
    let e = html[i];
    tableBody.insertAdjacentHTML("afterbegin", e);
  }

  function colorChanges(strArr) {
    console.log(strArr);
    for (let i = 0; i < strArr.length; i++) {
      if (strArr[i].textContent) {
        if (
          strArr[i].textContent === "Success" ||
          strArr[i].textContent === "success" ||
          strArr[i].textContent === "Success "
        ) {
          strArr[i].style.color = "#2AC9A1";
        } else {
          strArr[i].style.color = "#FB6868";
        }
      }
    }
  } // Changes color of success/error status

  colorChanges(statusElements);
});
