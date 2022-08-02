const dashboardButton = document.getElementById('jsButton');
const dashboardButtonText = dashboardButton.innerHTML;
const dashboardButtonChild = dashboardButton.firstElementChild;
const selectClass = document.getElementById('js-select-class');
const buttonCode = document.getElementById('js-button-code');
const buttonCSSClass = document.getElementById('js-button-css-class');
let selectedOption = selectClass.value;

buttonCode.append(dashboardButtonText);

selectClass.onchange = function() {
  const classValue = this.value;
  dashboardButtonChild.classList.replace(selectedOption, classValue);
  buttonCSSClass.innerHTML = `<code>.${classValue}</code>`;
  selectedOption = classValue;
}
