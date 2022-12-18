const API_ID="b5f3a248";
const API_KEY=
"2623f6be685a1f6cb1db7fb434ff1756";
const btn1 =document.querySelector("#btn1");
const btn2= document.querySelector("#btn2");
const btn3= document.querySelector("#btn3");

// const btn4= document.querySelector("#btn4");
const form=document.querySelector("form");
const container=document.querySelector(".container");
const searchitems=document.querySelector(".search-result");

let query="";

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    query=e.target.querySelector("input").value;
    console.log(query);
    fetchAPI();
});

const fetchAPI=async()=>{
  searchitems.innerHTML=`
 

   <h1 class="loader">LOADING...</h1>
  
  
  
  `;
    const url=`https://api.edamam.com/search?q=${query}&app_id=${API_ID}&app_key=${API_KEY}&from=0&to=20`;
    const response= await fetch(url);
    const data=await response.json();
    console.log(data);
    generateHtml(data.hits);
};


const generateHtml = (results)=>{
    container.classList.remove("initial");
    let mydata = "";
    results.map((item) => {
     mydata += `
        <div class="item">
          <img src="${item.recipe.image}" alt="img">
          <div class="flex-container">
            <h1 class="title">${item.recipe.label}</h1>
            <a class="view-btn" target="_blank" href="${
              item.recipe.url
            }">View Recipe</a>
          </div>
          <p class="item-data">Calories: ${item.recipe.calories.toFixed(2)}</p>
          <p class="item-data">Diet label: ${
            item.recipe.dietLabels.length > 0
              ? item.recipe.dietLabels
              : "No Data Found"
          }</p>
          <p class="item-data">Health labels: ${item.recipe.healthLabels}</p>
        </div>
      `;
    });
    console.log( mydata);
    searchitems.innerHTML=mydata;
}

btn1.addEventListener('click', function(){
  query="Vegetarian";
  fetchAPI(query)
});
btn2.addEventListener('click', function(){
  query="High-Protein";
  fetchAPI(query)
});

btn3.addEventListener('click', function(){
  query="Low-Sugar";
  fetchAPI(query)
})
// btn4.addEventListener('click', function(){
//   query="Lowfiber";
//   fetchAPI(query)
// })

// btn4.addEventListener('click', function(){
//   query="Highfiber";
//   fetchAPI(query)
// })













 //     generatedHtml += `
    //     <div class="item">
    //       <img src="${item.recipe.image}" alt="img">
    //       <div class="flex-container">
    //         <h1 class="title">${item.recipe.label}</h1>
    //         <a class="view-btn" target="_blank" href="${
    //           item.recipe.url
    //         }">View Recipe</a>
    //       </div>
    //       <p class="item-data">Calories: ${item.recipe.calories.toFixed(2)}</p>
    //       <p class="item-data">Diet label: ${
    //         item.recipe.dietLabels.length > 0
    //           ? item.recipe.dietLabels
    //           : "No Data Found"
    //       }</p>
    //       <p class="item-data">Health labels: ${item.recipe.healthLabels}</p>
    //     </div>
    //   `;





