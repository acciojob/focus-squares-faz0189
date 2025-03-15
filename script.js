let squares = document.querySelectorAll(".square");

function switchcolors(event){
	squares.forEach(square=>{
		square.style.backgroundColor = (square === event.target) ? '#E6E6FA':'#6F4E37';
	});
	
}

function resetcolor(){
	squares.forEach(square=>{
		sqaure.style.backgroundColor = '#E6E6FA';
	});
}

squares.forEach(square=>{
	square.addEventListener("mouseover",switchcolors);
	square.addEventListener("mouseout",resetcolor);
	
})
