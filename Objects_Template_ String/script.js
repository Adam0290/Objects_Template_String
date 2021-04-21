// Creating a list of Objects using Template String  //

let carlist = [{ brand:"Ford", model:"Ferrari", price:12344, color:"Red" },];

function addcar() {
let car = {   
 brand: document.getElementById("brand").value,
 model: document.getElementById("model").value,
 color: document.getElementById("color").value,
 price: document.getElementById("price").value,
};

carlist.push(car);

document.getElementById("brand").value = "";
document.getElementById("model").value = "";
document.getElementById("color").value = "";
document.getElementById("price").value = "";
console.log(carlist);
} 
function showlist() {
for (let i = 0; i < carlist.length; i++) {

let card = document.createElement("div"); // Create a Div for each object. //
card.className = "card"; // Use this class name in the CSS to design our card >>>>> "card = allows us to change the CSS later.". //
card.style.backgroundColor = carlist[i].color;  // Keeps it the same as the cardlist.
card.innerHTML += `<p>${carlist[i].brand}</p><p>${carlist[i].model}</p><p>${carlist[i].price}</p>`; // Whatever code we put inside this it will appear in the div. >>>>> Adding elements the innerHTML into the div I created in the HTML code. //
document.getElementById("showcase").appendChild(card); // The above code is called a template string >>> Template literals are enclosed by the backtick `` //
}
}

// String Literal = contained in two "" //
// Template String = contained in two  `` //

// Use $ is used to write a variable in a Template String. >>>>> put in a curly brace then write the code >>>>> ${} >>> ${carlist[i].brand} //
