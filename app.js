fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=`)
.then(res => res.json())
.then(data => showAllMeal(data.meals))

const showAllMeal = foods =>{
    const mealsDiv = document.getElementById('meals-display');
    foods.forEach(food => {
        const mealDiv = document.createElement('div');
        mealDiv.className = "meal-item";
         const mealInfo = `
         <div class="col">
                    <div class="card">
                    <img src="${food.strMealThumb}">
                    <div class="card-body">
                        <h5 class="card-title">${food.strMeal}</h5>
                    </div>
                    </div>
            </div>
         `
        mealDiv.innerHTML = mealInfo;
         mealsDiv.appendChild(mealDiv);
    });
}

document.getElementById('search-btn').addEventListener('click', function(){
    document.getElementById('meals-display').style.display = 'none';
    const mealInput = document.getElementById('meal-input').value;
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${mealInput}`)
        .then(res => res.json())
        .then(data => displayMeal(data.meals))
    .catch(err => alert('Meal not found'));
});

const displayMeal = meals =>{
    const mealsDiv = document.getElementById('meals-container');
    meals.forEach(meal => {
        const mealDiv = document.createElement('div');
        mealDiv.className = "meal-item";
         const mealInfo = `
         <div class="col">
                    <div class="card">
                    <img src="${meal.strMealThumb}">
                    <div class="card-body">
                        <h5 class="card-title">${meal.strMeal}</h5>
                    </div>
                    </div>
            </div>
         `
        mealDiv.innerHTML = mealInfo;
         mealsDiv.appendChild(mealDiv);
    });
 }




