const selectType = document.getElementById('js-select-type');
let selectedType = selectType.value;

const selectSize = document.getElementById('js-select-size');
let selectedSize = selectSize.value;

const button = document.getElementById('js-button');
const buttonText = button.innerHTML;
const buttonChild = button.firstElementChild;

const buttonCSSClass = document.getElementById('js-button-css-class');
const buttonCode = document.getElementById('js-button-code');

buttonCode.append(buttonText);

const updateSnippet = function(classValue) {
  buttonCSSClass.innerHTML = `<code>.button .${selectedType} .${selectedSize}</code>`;
}

const updateDemo = function() {
  buttonChild.removeAttribute('class');
  buttonChild.classList.add('button', selectedType, selectedSize);
}

selectType.onchange = function() {
  selectedType = this.value;
  updateSnippet();
  updateDemo();
}

selectSize.onchange = function() {
  selectedSize = this.value;
  updateSnippet();
  updateDemo();
}
