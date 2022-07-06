import tokens from "./dt.json";

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

const tokenCategories = tokens.map((token) => token.name);
const tokenUsages = tokens.map((token) => token.value.name);
const tokenComponents = tokens.map((token) => token.value.value.name);

function testNames(token, name, description) {
  const namesAreValid = token.every(e=> name.includes(e));
  if (!namesAreValid) {
    console.error(`Some token ${description} names aren't correct`);
  }
}

testNames(tokenCategories, categories, categoryDescription);
testNames(tokenUsages, usages, usageDescription);
testNames(tokenComponents, components, componentDescription);
