const dashboardTable = document.getElementById('jsDashboardTable');
const dashboardTableChild = dashboardTable.firstElementChild;
const selectClass = document.getElementById('js-select-class');
let selectedOption = selectClass.value;

selectClass.onchange = function() {
  const classValue = this.value;
  dashboardTableChild.classList.replace(selectedOption, classValue);
  selectedOption = classValue;
}
