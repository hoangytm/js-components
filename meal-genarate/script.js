
 async function run() {
   let data=  await (await fetch('https://www.themealdb.com/api/json/v1/1/random.php')).json()
   data= data.meals[0]
   let li =''
  for(const key in data){
    if(key.includes('strIngredient')&&data[key]){
    li+= `\n <li>Mushrooms - ${data[key]}</li>`
    }

  }
   //do all login here
let element= document.getElementById('content')
let html =`<div class="content-ingredients">
<img class="content-image" src="${data.strMealThumb}" alt="image">

<p class="category">
    <strong> Category: </strong>
    ${data.strCategory}
</p>
<p class="category">
    <strong> Area: </strong>
      ${data.strArea}
</p>
<p class="category">
    <strong> TAG: </strong>
      ${data.strTags?data.strTags:''} 
</p>
<h5> Ingredients</h5>
<ul>
    ${li}
</ul>

</div>
<div class="content-description">
<h4>${data.strMeal}</h4>
<p>
    ${data.strInstructions}
</p>
</div>`
element.innerHTML  =html
}

run()
let buttonRadom= document.getElementById('getmeal')
buttonRadom.addEventListener('click',(item)=>{
run()
})





// SOCIAL PANEL JS
const floating_btn = document.querySelector('.floating-btn');
const close_btn = document.querySelector('.close-btn');
const social_panel_container = document.querySelector('.social-panel-container');

floating_btn.addEventListener('click', () => {
	social_panel_container.classList.toggle('visible')
});

close_btn.addEventListener('click', () => {
	social_panel_container.classList.remove('visible')
});