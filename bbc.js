var story = document.getElementById('anounce').getElementsByTagName('li');

name_classes('on');

for(i=0;i<story.length;i++){
	story[i].onmouseover = carousel;
}

function carousel(){
	reset();
	name_classes('off');
	this.className = this.className + ' on'; 					// Adds an active class
	var child = this.getElementsByTagName('a')[0]; 				// Looks for the first anchor
	var result = child.innerHTML;								// Store the HTML content of the anchor
	result = result.replace(/-->/,'>').replace(/<!-- /,'<');	// Uncomment the img tag
	child.innerHTML = result;									// Write back the HTML content
}


function reset(){
	for(i=0;i<story.length;i++){
		if(story[i].getElementsByTagName('a')[0].getElementsByTagName('img')[0]){
			var temp = story[i].getElementsByTagName('a')[0].innerHTML.replace(/<img/,'<!-- img').replace(/\/>/,'/-->');
			story[i].getElementsByTagName('a')[0].innerHTML = temp;
		}
	}
}


function name_classes(operand){
	for(i=0;i<story.length;i++){
		switch(i){
			case 0:
				if(operand=='on')
					story[i].className = 'one on';
				else
					story[i].className = 'one';
				break;
			case 1:
				story[i].className = 'two';
				break;
			case 2:
				story[i].className = 'three';
				break;
			default:
				break;
		}
	}
}