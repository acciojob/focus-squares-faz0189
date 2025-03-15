let squares = document.querySelectorAll(".sqaure");

function switchcolors(event){
	squares.forEach(square=>{
		square.style.backgroundColor = (sqaure === event.target) ? '#E6E6FA':'#6F4E37';
	});
	
}

function resetcolor(e){
	squares.forEach(sqaure=>{
		sqaure.style.backgroundColor = '#E6E6FA';
	});
}

squares.forEach(square=>{
	square.addEventListener("mouseover",switchcolors);
	square.addEventListener("mouseout",resetcolors);
	
})
