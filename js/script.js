// load all meals
const loadAllMeals = async () => {
  const res = await fetch(
    "https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood"
  );
  const allMeals = await res.json();
  const allMeal = allMeals.meals;
  displayAllMeals(allMeal.slice(0, 6));
  const seaFoodBtn = document.getElementById("btn-sea-all");
  seaFoodBtn.addEventListener("click", () => {
    displayAllMeals(allMeal);
    seaFoodBtn.classList.add("hidden");
    const btnSeeLess = document.getElementById("btn-sea-less");
    btnSeeLess.classList.remove("hidden");
    btnSeeLess.addEventListener("click", () => {
      btnSeeLess.classList.add("hidden");
      seaFoodBtn.classList.remove("hidden");
      displayAllMeals();
    });
  });
};

// display all  meals
const displayAllMeals = (allMeals) => {
  const allMealContainer = document.getElementById("favourite-container");
  allMeals.forEach((meal) => {
    const div = document.createElement("div");
    div.classList.add(
      "grid",
      "grid-cols-3",
      "gap-2",
      "border",
      "rounded-lg",
      "items-center"
    );
    div.innerHTML = `
      <div class="col-span-1"><img src=${meal.strMealThumb} alt=${meal.strMeal} /></div>
      <div class="space-y-2 p-4 col-span-2">
          <h2 class="text-xl font-bold">${meal.strMeal}</h2>
          <button class="font-semibold text-orange-400 underline">
          View Details
          </button>
      </div>
    `;
    allMealContainer.appendChild(div);
  });
};

// load all categories meals
const loadAllCategoriesMeals = async () => {
  const res = await fetch(
    "https://www.themealdb.com/api/json/v1/1/categories.php"
  );
  const allMeals = await res.json();
  const allMeal = allMeals.categories;
  displayAllCategoriesMeals(allMeal.slice(0, 6));
  const btnCategory = document.getElementById("btn-category-all");
  btnCategory.addEventListener("click", () => {
    displayAllCategoriesMeals(allMeal);
  });
};

// display all categories meals
const displayAllCategoriesMeals = (allMeals) => {
  const allMealContainer = document.getElementById("food-container");
  allMeals.forEach((meal) => {
    const div = document.createElement("div");
    div.classList.add(
      "grid",
      "grid-cols-3",
      "gap-2",
      "border",
      "rounded-lg",
      "items-center"
    );
    div.innerHTML = `
    <div class="col-span-1"><img src=${meal.strCategoryThumb} alt=${
      meal.strCategory
    } /></div>
    <div class="space-y-2 p-4 col-span-2">
        <h2 class="text-xl font-bold">${meal.strCategory}</h2>
        <p class="text-sm text-gray-500">
        ${meal.strCategoryDescription.slice(0, 120)}
        </p>
        <button class="font-semibold text-orange-400 underline">
        View Details
        </button>
    </div>
  `;
    allMealContainer.appendChild(div);
  });
};

loadAllCategoriesMeals();
loadAllMeals();
