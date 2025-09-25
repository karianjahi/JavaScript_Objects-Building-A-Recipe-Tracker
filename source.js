let recipes = [];

let recipe1 = {
    name: "Spaghetti Carbonara",
    ingredients: ["spaghetti", "Parmesan cheese", "pancetta", "black pepper"],
    ratings: [4, 5, 4, 5],
    cookingTime: 22,
    totalIngredients: null,
    difficultyLevel: "",
    averageRating: null,
};

console.log(recipe1);

let recipe2 = {
    name: "Chicken Curry",
    ingredients: ["chicken breast", "coconut milk", "curry powder", "onion", "garlic"],
    ratings: [4, 5, 5, 5],
    cookingTime: 42,
    totalIngredients: null,
    difficultyLevel: '',
    averageRating: null,
}
console.log(recipe2);
let recipe1Name = recipe1.name;
let recipe2Name = recipe2.name;
let recipe1CookingTime = recipe1.cookingTime;
let recipe2CookingTime = recipe2.cookingTime;
console.log(recipe1Name);
console.log(recipe2Name);
console.log(recipe1CookingTime);
console.log(recipe2CookingTime);



const recipe3 = {
    name: 'Vegetable Stir Fry',
    ingredients: ['broccoli', 'carrot', 'bell pepper'],
    cookingTime: 15,
    totalIngredients: null,
    difficultyLevel: '',
    ratings: [4, 3, 4, 5],
    averageRating: null,
};
console.log(recipe3);
console.log("");
console.log("");
console.log("");

// Push all the three recipe objects into the recipes array: How to create an array of objects
recipes.push(recipe1, recipe2, recipe3);
console.log(recipes)

// Calculating the averaging rating, the total ingredients, and the difficulty level for each recipe in the array

let getAverageRating = (arrayWithRatings) => {
    const mean = arrayWithRatings.reduce((sum, value) => sum + value, 0) / arrayWithRatings.length;
    return mean
};

// Creating a totalIngredients function that takes a single argument, representing an array with ingredients, and returns the number of ingredients from the array passed to the function.

let getTotalIngredients = (anArray) => {
    return anArray.length;
}

// Creating a getDifficultyLevel function that takes a number indicating the cooking time as a parameter.

let getDifficultyLevel = (cookingTime) => {
    if (cookingTime <= 30) return "easy";
    if (cookingTime <= 60) return "medium";
    return "hard";   
}

// Testing the functions
let recipe1AverageRating = getAverageRating(recipe1.ratings);
let recipe1TotalIngredients = getTotalIngredients(recipe1.ingredients);
let recipe1DifficultyLevel = getDifficultyLevel(recipe1.cookingTime);
console.log(recipe1AverageRating);
console.log(recipe1TotalIngredients);
console.log(recipe1DifficultyLevel);

// update some properties in recipe1, recipe2, recipe3
recipe1.totalIngredients = getTotalIngredients(recipe1.ingredients);
recipe1.difficultyLevel = getDifficultyLevel(recipe1.cookingTime);
recipe1.averageRating = getAverageRating(recipe1.ratings);
console.log(recipe1);
console.log("")
console.log("")
console.log("")
recipe2.totalIngredients = getTotalIngredients(recipe1.ingredients);
recipe2.difficultyLevel = getDifficultyLevel(recipe1.cookingTime);
recipe2.averageRating = getAverageRating(recipe1.ratings);
console.log(recipe2);
console.log("")
console.log("")
console.log("")
recipe3.totalIngredients = getTotalIngredients(recipe1.ingredients);
recipe3.difficultyLevel = getDifficultyLevel(recipe1.cookingTime);
recipe3.averageRating = getAverageRating(recipe1.ratings);
console.log(recipe3);
console.log("")
console.log("")
console.log("")

