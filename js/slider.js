
const items = document.querySelector("#items");
const left = document.querySelector("#left")
const right = document.querySelector("#right")

const loop = (direction, e) =>{
    e.preventDefault();
	
	//for (let i = 0; i <items.length; i++){
	//console.log(items[i])
	//}
	
console.log(items);
    if(direction === "right") {
		
		//for (var i = 0; i < items.length; i++){
        //items.appendChild = [1].firstElementChild;
		items.appendChild(items.firstElementChild);
		
    } else {
        items.insertBefore(items.lastElementChild, items.firstElementChild);
    }
};

console.log(right);
right.addEventListener("click", (e) => {
  loop("right", e);
});

left.addEventListener("click", (e) => {
  loop("left", e);
});