// alert("hello world");
(async function () {
    const res = await fetch("./recipe.json")
    const reci = await res.json();

    const inp = document.getElementById("inp");
    const btn = document.getElementById("btn");
    const list = document.getElementById("list")
    const dt=document.getElementById("details")

function load(recipe){
// console.log(recipe)
dt.innerHTML =`

<h2 class="title">${recipe.title}</h2>
<h3>Ingredients</h3>

<ul>${
    recipe.ingredients.map(ingredients=>{
        return "<li>"+ ingredients+"</li>"
    }).join("")
}</ul>

<h3>instruction</h3>
<div>${recipe.instructions}</div>



`
}


function display(result){
result.forEach(recipe => {
    list.innerHTML = "";
    // console.log(recipe)
const add = `
<li>
<h2 class="title">${recipe.title}</h2>
<div class="description">${recipe.description}</div>


</li>
`;


list.addEventListener("click",function(){
    load(recipe)
})
list.innerHTML=add


});
}

    function searchinpt() {
        const inpval = inp.value
        // console.log(inpval)
        const result = reci.filter(function (recipe) {
            // console.log(recipe)
            return (recipe.title.toLowerCase().includes(inpval) ||
      recipe.ingredients.join(" ").toLowerCase().includes(inpval))
        });
        // console.log(result)
        display(result)
    }
    btn.addEventListener("click", searchinpt)
    // console.log(inp)
    // console.log(btn)
    // console.log(reci)
})();
