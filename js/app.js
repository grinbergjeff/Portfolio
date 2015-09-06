document.addEventListener("DOMContentLoaded", function(event) { 
	
	//Hide landing page for now to implement design for other areas
	/*document.getElementById('intro-section').style.display='none';*/
	
	clickMenuActive();
	displayActive();
});

/*Functions*/

function clickMenuActive(clickedButton) {
	//Function to grab information of event/element
	function getEventTarget(e) {
		e = e || window.event;
		return e.target || e.srcElement;
	}
	
	var menuList = document.getElementById('menu-buttons');
	menuList.onclick = function(event) {
		//Remove current active element
		var activeElement = document.getElementsByClassName('active');
		for (var i = 0; i < activeElement.length; i++) {
			activeElement[i].setAttribute('class', '');
		}
		//Make clicked element active
		var target = getEventTarget(event);
		target.setAttribute('class','active');
	}
}
function displayActive() {
	var activeElement = document.getElementsByClassName('active');
	for (var i = 0; i < activeElement.length; i++) {
		var activeElementID = activeElement[i].getAttribute('id');
		//If active element's ID is ___, go to respective section
		if (activeElementID === 'menu-am') {
			document.getElementById('portfolio', 'contact').style.display='none';
		}
		else if (activeElementID === 'menu-p') {
			document.getElementById('about-me', 'contact').style.display='none';
		}
		else if (activeElementID === 'menu-c') {
			document.getElementById('about-me', 'portfolio').style.display='none';
		}
	}
}