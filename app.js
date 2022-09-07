const loadmeals = (search) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
    fetch(url)
        .then(res => res.json())
        .then(data => displaymeals(data.meals))
}

const displaymeals = meals => {
    const mealscontiner = document.getElementById('meals-continer');
    mealscontiner.innerHTML = ``;
    meals.forEach(meal => {
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div onclick="meatdeatialsfield(${meal.idMeal})" class="card h-100">
                    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${meal.strMeal}</h5>
                        <p class="card-text">T${meal.strInstructions.slice(0, 150)}</p>
                    </div>
                </div>
        `;
        mealscontiner.appendChild(div);

    });
}
// search 
const searchfood = () => {
    const searchfild = document.getElementById('search-field');
    const searchtext = searchfild.value;
    loadmeals(searchtext);
    searchfild.value = '';
}
// id details
const meatdeatialsfield = (idMeal) => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayid(data.meals[0]))
}
const displayid = meal => {
    const divid = document.getElementById('id-continer');
    divid.innerHTML = ``;
    const divmeal = document.createElement('div')
    divmeal.classList.add('card');
    divmeal.innerHTML = `
    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${meal.strMeal}</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of
                            the card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
    
    `;
    divid.appendChild(divmeal);
}
loadmeals('');