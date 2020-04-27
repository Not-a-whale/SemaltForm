export const makeElements = function (dataArr) {
  const elements = [];
  for (let i = 0; i < dataArr.length; i++) {
    let lastCheckDate = formatDate(dataArr[i].lastCheck);
    let lastSubmitedDate = formatDate(dataArr[i].lastSubmitted);
    const layout = `<tr class="table__row" id=tableRow-${i + 1}>
        <td>
          <input
            class="tableCheckbox"
            type="checkbox"
            name="tableSitemapsCheckbox-${i + 1}"
            id="tableSitemapsCheckbox-${i + 1}"
          />
          <label for="tableSitemapsCheckbox-${i + 1}"></label>
        </td>
        <td class="linked__element">
          <a href="${dataArr[i].path}"
            >/sitemap.xml <i class="fas fa-external-link-alt"></i
          ></a>
        </td>
        <td>${dataArr[i].isSitemapsIndex ? "Sitemap Index" : "Other"}</td>
        <td>${lastCheckDate}</td>
        <td>${lastSubmitedDate}</td>
        <td class="status" style="color: ${
          !dataArr[i].errors ? "#2AC9A1" : "#FB6868"
        }; white-space: nowrap; width: 60px">${
      !dataArr[i].errors ? "Success" : dataArr[i].errors
    } ${!dataArr[i].errors ? "" : "errors"}</td>
        <td>${dataArr[i].urls}</td>
        <td>
          <button class="button__recrewl" id="tableButtonRecrewl-1">
            Recrewl
          </button>
        </td>
        <td class="remove__button"><i class="fas fa-trash"></i></td>
        </tr>`;
    elements.push(layout);
  }
  return elements;
};

function formatDate(dateString) {
  let fullDate = new Date(dateString);
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  let year = fullDate.getFullYear();
  let month = months[fullDate.getMonth()];
  let day = fullDate.getDate();

  fullDate = `${month} ${day},<br>${year}`;

  return fullDate;
}
