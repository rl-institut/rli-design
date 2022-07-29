const dashboardTable = document.getElementById('jsDashboardTable');
const dashboardTableText = dashboardTable.innerHTML;
const dashboardTableChild = dashboardTable.firstElementChild;
const selectClass = document.getElementById('js-select-class');
const tableCode = document.getElementById('js-table-code');
const tableCSSClass = document.getElementById('js-table-css-class');
let selectedOption = selectClass.value;

tableCode.append(dashboardTableText);

selectClass.onchange = function() {
  const classValue = this.value;
  dashboardTableChild.classList.replace(selectedOption, classValue);
  tableCSSClass.innerHTML = `<code>.${classValue}</code>`;
  selectedOption = classValue;
}
