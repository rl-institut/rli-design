const dashboardTable = document.getElementById('jsDashboardTable');
const dashboardTableText = dashboardTable.innerHTML;
const dashboardTableChild = dashboardTable.firstElementChild;
const selectClass = document.getElementById('js-select-class');
let tableCode = document.getElementById('js-table-code');
let selectedOption = selectClass.value;

tableCode.append(dashboardTableText);

selectClass.onchange = function() {
  const classValue = this.value;
  dashboardTableChild.classList.replace(selectedOption, classValue);
  selectedOption = classValue;
}
