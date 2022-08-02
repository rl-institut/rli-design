const bgColor = document.getElementById('js-bg-color');
const button = document.getElementById('jsButton');
const buttonText = button.innerHTML;
const buttonChild = button.firstElementChild;
const selectBg = document.getElementById('js-select-bg');
const selectType = document.getElementById('js-select-type');
const buttonCode = document.getElementById('js-button-code');
const buttonCSSClass = document.getElementById('js-button-css-class');
let selectedBg = selectBg.value;
let selectedType = selectType.value;

buttonCode.append(buttonText);

const updateSnippet = function(classValue) {
  buttonCSSClass.innerHTML = `<code>.${classValue}</code>`;
}

const updateDemo = function(e, selected, classValue) {
  e.classList.replace(selected, classValue);
}

selectType.onchange = function() {
  const classValue = this.value;
  updateSnippet(classValue);
  updateDemo(buttonChild, selectedType, classValue);
  selectedType = classValue;
}
