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

const designTokensTable = document.getElementById("js-dtTable");
let designTokensTableContent = "";

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
const dt = createDesignTokens();

function createDesignTokens() {
  let dt = "";

  for (let i = 0; i < tokenCategories.length; i++) {
    if (typeof tokenSubitems[i] === "undefined" && typeof tokenStates[i] === "undefined") {
      designTokens.push(`${tokenCategories[i]}.${tokenUsages[i]}.${tokenComponents[i]}`);
    } else if (typeof tokenStates[i] === "undefined") {
      designTokens.push(`${tokenCategories[i]}.${tokenUsages[i]}.${tokenComponents[i]}.${tokenSubitems[i]}`);
    } else {
      designTokens.push(`${tokenCategories[i]}.${tokenUsages[i]}.${tokenComponents[i]}.${tokenSubitems[i]}.${tokenStates[i]}`);
    }
  }
  return designTokens;
};

// Populate table
for (let i = 0; i < designTokens.length; i++) {
  designTokensTableContent += `<tr>
  <td class="dt-table__token"><span>${dt[i]}</span></td>
  <td class="dt-table__roles">${dtRoles[i]}</td>
  <td class="dt-table__variables"><code>${dtVariables[i]}</code></td>
  <td class="dt-table__utilities"><code>${dtUtilities[i]}</code></td>`

  if (tokenCategories[i] === "clr" && tokenUsages[i] === "bg") {
    designTokensTableContent += `<td class="dt-table__display dt-table__display--bg"><span class="${dtUtilities[i].slice(1)}"></span></td>`;
  } else if (tokenCategories[i] === "clr" && tokenUsages[i] === "txt") {
    designTokensTableContent += `<td class="dt-table__display dt-table__display--text"><span class="${dtUtilities[i].slice(1)}">Text color</span></td>`;
  } else {
    designTokensTableContent += `<td></td>`
  }

  designTokensTableContent += `</tr>`;
  designTokensTable.innerHTML = designTokensTableContent;
}

// Test names
function testNames(token, name, description) {
  const namesAreValid = token.every(e=> name.includes(e));
  if (!namesAreValid) {
    console.error(`Some token ${description} names aren't correct`);
  }
}

testNames(tokenCategories, categories, categoryDescription);
testNames(tokenUsages, usages, usageDescription);
testNames(tokenComponents, components, componentDescription);
