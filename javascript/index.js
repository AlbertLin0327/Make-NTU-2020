// bar array
bar = ["../images/long-island.png", "../images/vodka-sunrise.png", "../images/whiskey-coke.png", "../images/margarita.png", "../images/diy.png"]
html_name = ["long-island",  "vodka-sunrise", "whiskey-coke", "margarita", "diy"]
drink_name = ["Long Island", "Vodka Sunrise", "Whiskey Coke", "Margarita", "Do It Yourself"]

// html object
var increment = document.getElementById("next"); 
var decrement = document.getElementById("previous"); 
var picture = document.getElementById("display"); 
var loading = document.getElementById("bg-display");
var link = document.getElementById("source-link");

//function of changing drink
function changedrink(){
	picture.closest('a').href = html_name[current] + ".html";
	picture.src = "";
	loading.style.display = "";
	picture.src = bar[current];

	picture.onload = function(){
		loading.style.display = "none";
		link.textContent = drink_name[current];
	}
}

// loading from the beginning
var current = 0; 
picture.src = bar[current]
picture.onload = function(){
	changedrink();
	decrement.classList.add("disabled");
}

// event when right button is clicked
increment.addEventListener( 
	"click", function(){ 
		decrement.classList.remove("disabled")
		if(current < bar.length - 1){ 
			current += 1
			changedrink();
			if(current == bar.length - 1){
				increment.classList.add("disabled");
			}
		}
	} 
); 

//event when left button is clicked
decrement.addEventListener( 
	"click", function(){ 
		increment.classList.remove("disabled")
		if(current > 0){ 
			current -= 1 
			changedrink();

			if(current == 0){
				decrement.classList.add("disabled");
			}
		}
	} 
);