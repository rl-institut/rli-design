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
  "colors",
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
  designTokensTableContent += `<tr><td>${designTokens[i]}</td><td>${dtRoles[i]}</td><td>${dtVariables[i]}</td><td>${dtUtilities[i]}</td></tr>`;
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
