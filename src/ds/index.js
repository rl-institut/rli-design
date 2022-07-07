import tokens from "./dt.json";

// Variables
const designTokens = tokens.map((token) => `${token.name}.${token.value.name}.${token.value.value.name}.${token.value.value.value.name}`);
const dtRoles = tokens.map((token) => token.value.value.value.value.description);
const dtVariables = tokens.map((token) => token.value.value.value.value.variable);
const dtUtilities = tokens.map((token) => token.value.value.value.value.utility);

const tokenCategories = tokens.map((token) => token.name);
const tokenUsages = tokens.map((token) => token.value.name);
const tokenComponents = tokens.map((token) => token.value.value.name);

const categories = [
  "borderRadius",
  "color",
  "spacing",
  "typography"
];

const usages = [
  "background",
  "fontSize",
  "fontWeight",
  "nav",
  "padding",
  "text"
];

const components = [
  "body",
  "button",
  "dashboard",
  "sidebarAnchor"
]

const categoryDescription = "category";
const usageDescription = "usage";
const componentDescription = "component";

// Populate table
const designTokensTable = document.getElementById("js-dtTable");
let designTokensTableContent = '';
for (let i = 0; i < designTokens.length; i++) {
  designTokensTableContent += `<tr>
  <td class="dt-table__token"><span>${designTokens[i]}</span></td>
  <td class="dt-table__roles">${dtRoles[i]}</td>
  <td class="dt-table__variables"><code>${dtVariables[i]}</code></td>
  <td class="dt-table__utilities"><code>${dtUtilities[i]}</code></td>`

  if (tokenCategories[i] === "color" && tokenUsages[i] === "background") {
    designTokensTableContent += `<td class="dt-table__display dt-table__display--bg"><span class="${dtUtilities[i].slice(1)}"></span></td>`;
  } else if (tokenCategories[i] === "color" && tokenUsages[i] === "text") {
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
