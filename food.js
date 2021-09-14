const searchFood = () => {
    const searchField = document.getElementById('search-input');
    const searchText = searchField.value;
    if (searchText == '') {
        const errorMsg = document.getElementById('error');
        errorMsg.innerHTML = '';

        const div = document.createElement('div');
        div.innerHTML =
            ` <p >Please type your food name</p>`
        errorMsg.appendChild(div);
    }
    else {
        const errorMsg = document.getElementById('error');
        errorMsg.innerHTML = '';
        searchField.value = '';
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;

        fetch(url)
            .then(res => res.json())
            .then(data => displaySearchResult(data.meals));
    }


}
const displaySearchResult = meals => {
    // console.log(meals);

    const searchResult = document.getElementById('search-result');
    // remove search item 

    searchResult.textContent = '';
    if (!meals) {
        console.log(meals);
        const errorMsg = document.getElementById('error');
        errorMsg.innerHTML = '';
        const div = document.createElement('div');
        div.innerHTML =
            ` <p>Not Found</p>`
        errorMsg.appendChild(div);

    }

    meals?.forEach(meal => {
        // console.log(meals);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div onclick="loadMealDetail(${meal.idMeal})" class="card "  >
        <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${meal.strMeal}</h5>
          <p class="card-text">${meal.strInstructions.slice(0, 200)}</p>
        </div>
        
        `
        searchResult.appendChild(div);

    })

}
const loadMealDetail = mealId => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayMealDetail(data.meals[0]));
    // console.log(mealId);
}
const displayMealDetail = meal => {
    const mealDetail = document.getElementById('meal-detail');
    mealDetail.textContent = '';
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">${meal.strMeal}</h5>
        <p class="card-text">${meal.strInstructions.slice(0, 350)}</p>
    </div>
    
    `
    mealDetail.appendChild(div);
}