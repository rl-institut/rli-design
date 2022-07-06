import tokens from "./dt.json";

const categories = [
  "borderRadius",
  "colors",
  "spacing",
  "typography"
];

const tokensCategories = tokens.map((token) => token.name);

// Test if all categories are correct
const tokensCategoriesAreValid = tokensCategories.every(value=> categories.includes(value));

if (!tokensCategoriesAreValid) {
  console.error("Some token category names aren't correct");
  console.log(tokensCategories);
}

