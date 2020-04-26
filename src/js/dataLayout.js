export const makeElements = function (dataArr) {
  const elements = [];
  for (let i = 0; i < dataArr.length; i++) {
    const layout = `<tr class="table__row">
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
        <td>${dataArr[i].lastCheck.toLocaleString("en-US")}</td>
        <td>${dataArr[i].lastSubmitted.toLocaleString("en-US")}</td>
        <td class="status">${
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
