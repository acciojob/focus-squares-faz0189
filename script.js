let squares = document.querySelectorAll(".sqaure")

function switchcolors(e){
	squares.forEach(square=>{
		square.style.background = (sqaure === event.target) ? '#E6E6FA':'6F4E37';
	});
	
}

function resetcolor(e){
	squares.forEach(sqaure=>{
		sqaure.style.backgroundcolor = '#E6E6FA';
	});
}

squares.forEach(square=>{
	square.addEventListener("mouseover",switchcolors);
	square.addEventListener("mouseout",resetcolors);
	
})
