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
                    <div onclick="ingredientDetails('${food.idMeal}')" class="card">
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
    document.getElementById('meals-container').innerHTML = "";
    meals.forEach(meal => {
        const mealDiv = document.createElement('div');
        mealDiv.className = "meal-item";
         const mealInfo = `
         <div class="col">
                    <div onclick="ingredientDetails('${meal.idMeal}')" class="card">
                    <img src="${meal.strMealThumb}">
                    <div class="card-body">
                        <h5 id="searched-meal" class="card-title">${meal.strMeal}</h5>
                    </div>
                    </div>
            </div>
         `
        mealDiv.innerHTML = mealInfo;
         mealsDiv.appendChild(mealDiv);
    });
 }

 const ingredientDetails = id =>{
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
    fetch(url)
    .then(res => res.json())
    .then(data => viewDetails(data.meals[0]))
 }

 const viewDetails = details =>{
     const detailsDiv = document.getElementById('meal-ingredients');
     const detail = document.createElement('div');
     document.getElementById('meal-ingredients').innerHTML = "";
     const detailsInfo = `
         <div class="col">
                    <div class="card in-details">
                    <img class="details-img" src="${details.strMealThumb}">
                    <div class="card-body">
                        <h2 class="card-title">${details.strMeal}</h2>
                        <h4>Ingredients</h4>
                            <p>${details.strIngredient1}</p>
                            <p>${details.strIngredient2}</p>
                            <p>${details.strIngredient3}</p>
                            <p>${details.strIngredient4}</p>
                            <p>${details.strIngredient5}</p>
                            <p>${details.strIngredient6}</p>
                            <p>${details.strIngredient7}</p>
                            <p>${details.strIngredient8}</p>
                            <p>${details.strIngredient9}</p>
                            <p>${details.strIngredient10}</p>
                    </div>
                    </div>
            </div>
         `
    detail.innerHTML = detailsInfo;
    detailsDiv.appendChild(detail);
    
 }





