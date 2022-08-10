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



import tokens from "/ds/design-tokens/dt.json";

// Variables
let designTokens = [];
const tokenCategories = tokens.map((token) => token.name);
const tokenUsages = tokens.map((token) => token.value.name);
const tokenComponents = tokens.map((token) => token.value.value.name);
const tokenSubitems = tokens.map((token) => token.value.value.value.name);
const tokenStates = tokens.map((token) => token.value.value.value.value.name);
const dtRoles = tokens.map((token) => token.value.value.value.value.value.description);
const dtVariables = tokens.map((token) => token.value.value.value.value.value.variable);
const dtUtilities = tokens.map((token) => token.value.value.value.value.value.utility);

const buttonDesignTokensTable = document.getElementById("js-button-dtTable");
let buttonDesignTokensTableContent = "";
let buttonTableIndex = [];

const categories = [
  "borderRadius",
  "clr",
  "pos",
  "spacing",
  "size",
  "typo"
];

const usages = [
  "align",
  "bg",
  "br",
  "border",
  "fs",
  "fw",
  "ls",
  "nav",
  "pd",
  "pd-x",
  "pd-y",
  "txt"
];

const components = [
  "body",
  "btn",
  "db",
  "dbItem",
  "sideNav",
  "table"
]

const categoryDescription = "category";
const usageDescription = "usage";
const componentDescription = "component";

// Create design tokens
for (let i = 0; i < tokenCategories.length; i++) {
  if (tokenComponents[i] === "btn") {
    buttonTableIndex.push(i);
  }
};

//const dt = createDesignTokens();
//let buttonDesignTokens = "";

buttonTableIndex.forEach(function(i) {
  let dt = "";
  if (typeof tokenSubitems[i] === "undefined" && typeof tokenStates[i] === "undefined") {
    dt = `${tokenCategories[i]}.${tokenUsages[i]}.${tokenComponents[i]}`;
  } else if (typeof tokenStates[i] === "undefined") {
    dt = `${tokenCategories[i]}.${tokenUsages[i]}.${tokenComponents[i]}.${tokenSubitems[i]}`;
  } else {
    dt = `${tokenCategories[i]}.${tokenUsages[i]}.${tokenComponents[i]}.${tokenSubitems[i]}.${tokenStates[i]}`;
  }
  buttonTable(dt, i);
});

console.log(designTokens);

function buttonTable(dt, i) {
  buttonDesignTokensTableContent += `<tr>
  <td class="dt-table__token"><span>${dt}</span></td>
  <td class="dt-table__roles">${dtRoles[i]}</td>
  <td class="dt-table__variables"><code>${dtVariables[i]}</code></td>
  <td class="dt-table__utilities"><code>${dtUtilities[i]}</code></td>
  `

  if (tokenCategories[i] === "clr" && tokenUsages[i] === "bg") {
    buttonDesignTokensTableContent += `<td class="dt-table__display dt-table__display--bg"><span class="${dtUtilities[i].slice(1)}"></span></td>`;
  } else if (tokenCategories[i] === "clr" && tokenUsages[i] === "txt") {
    buttonDesignTokensTableContent += `<td class="dt-table__display dt-table__display--text"><span class="${dtUtilities[i].slice(1)}">Text color</span></td>`;
  } else {
    buttonDesignTokensTableContent += `<td></td>`
  }
  
  buttonDesignTokensTableContent += `</tr>`;
  buttonDesignTokensTable.innerHTML = buttonDesignTokensTableContent;
}

buttonTableIndex.forEach(function(i) {
  console.log(`${tokenCategories[i]}.${tokenUsages[i]}.${tokenComponents[i]}`);
  /* 
  <td class="dt-table__roles">${dtRoles[i]}</td>
  <td class="dt-table__variables"><code>${dtVariables[i]}</code></td>
  <td class="dt-table__utilities"><code>${dtUtilities[i]}</code></td>`

  

  buttonDesignTokensTableContent += `</tr>`;
  buttonDesignTokensTable.innerHTML = buttonDesignTokensTableContent; */
});

console.log(buttonTableIndex);