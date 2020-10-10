var button = document.getElementById('confirm');

var select = function(node){
	if(node.classList.contains('selected')){
		node.classList.remove('selected')
		node.classList.add('choice-button')
	}else{
		node.classList.add('selected')
		node.classList.remove('choice-button')
	}

	add = document.getElementsByClassName('selected');
	if(add.length > 3){
		button.classList.add('disabled');
		button.id = "";
	}else{
		button.id = "confirm";
		button.classList.remove('disabled');
	}
}

