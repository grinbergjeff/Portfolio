document.addEventListener("DOMContentLoaded", function(event) { 
	//Hide abot Me section for now
	/*document.getElementById('about-me').style.display='none';*/
	
	//Hide landing page for now to implement design for other areas
	document.getElementById('intro-section').style.display='none';
	
	makeActive();
});

/*Functions*/

function makeActive(clickedButton) {
	//var clickedButton = document.getElementById('menu-p');
	clickedButton.addEventListener("click", function() {
		var activeElement = document.getElementsByClassName('active');
			alert('yy');
		for (var i = 0; i < activeElement.length; i++) {
			activeElement[i].setAttribute('class', '');
			clickedButton.setAttribute('class','active');
		}
		//document.getElementsByClassName('active').className.replace('');
		//document.getElementById('menu-p').className.replace('active');
	});
}