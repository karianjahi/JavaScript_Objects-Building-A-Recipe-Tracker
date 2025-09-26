# 🥘 JavaScript Objects – Building a Recipe Tracker

Welcome to my **JavaScript Objects Practice Repo**! 🎉  
This project is all about learning how to use **objects**, **arrays**, and **functions** in JavaScript by building a simple **Recipe Tracker**. 👩‍🍳👨‍🍳

---

## 📂 Project Structure

## 📂 Project Structure

- **`source.js`** → Contains all the practice code where I:
  - Create recipe objects
  - Store them in an array
  - Add helper functions to calculate recipe details
  - Update and log recipe information  
- **`LICENSE`** → MIT License 📜  
- **`README.md`** → Project documentation (this file) 📝  
- **`.gitignore`** → Git ignore file ⚙️  


---

## ✨ What’s Inside

### 📌 Recipe Objects
Each recipe is represented as a **JavaScript object** with the following properties:
- `name` → The recipe name 🍝🍛🥦
- `ingredients` → List of ingredients 🥕🧄🧅
- `ratings` → Array of ratings (numbers) ⭐
- `cookingTime` → Time in minutes ⏲️
- `totalIngredients` → Number of ingredients (calculated later) 🧮
- `difficultyLevel` → Easy / Medium / Hard 🎯
- `averageRating` → Average of ratings 📊

Example:
```js
let recipe1 = {
  name: "Spaghetti Carbonara",
  ingredients: ["spaghetti", "Parmesan cheese", "pancetta", "black pepper"],
  ratings: [4, 5, 4, 5],
  cookingTime: 22,
  totalIngredients: null,
  difficultyLevel: "",
  averageRating: null,
};
```

### 📌 Recipe Array

All recipes get stored in one array called recipes:
```js
recipes.push(recipe1, recipe2, recipe3);
```

### 📌 Helper Functions

I created small utility functions to update and enrich the recipes:

- `getAverageRating(arrayWithRatings)` → Returns the mean rating ⭐

- `getTotalIngredients(anArray)` → Returns how many ingredients 🥑

- `getDifficultyLevel(cookingTime)` → Returns "easy", "medium", or "hard" depending on cooking time ⚡

### 📌 Updating Recipes

- After defining the helper functions, I looped through recipes and updated their:

    - `totalIngredients`

    - `difficultyLevel`

    - `averageRating`

- This makes the objects more complete and useful! ✅

### 🖥️ Console Output

- Running the file with `Node.js` (`node source.js`) will log:

    - Each recipe object before and after being updated

    - Calculations like average rating, number of ingredients, and difficulty

    - The full recipes array with all updated info 🎉

### 🚀 How to Run

1. Clone this repo 📂

2. Navigate into the folder

```bash
cd JavaScript_Objects-Building-A-Recipe-Tracker
```

3. Run the script with Node.js

```bash
node source.js
```

### 📝 Lessons Learned (so far…)

1. How to create and access object properties 🔑

2. How to work with arrays inside objects 📦

3. How to push objects into arrays ➕

4. How to write functions that operate on object data 🛠️

5. How to update object properties dynamically ♻️

6. Logging to the console for debugging 👀

### 🔮 Next Steps (Work in Progress 🚧)

 1. Add a function to search recipes by name 🔍

 2. Add a function to filter recipes by difficulty level ⚖️

 3. Add a function to find the top-rated recipe 🏆

 4. Maybe create a user interface (HTML/CSS/JS) 🎨

### 🎯 Goal

This project is not about perfection — it’s about learning JavaScript step by step 🪜.
Every commit shows a bit of progress as I get more comfortable with objects and arrays.