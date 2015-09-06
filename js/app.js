document.addEventListener("DOMContentLoaded", function(event) { 
	displayActive();
	clickMenuActive();
	
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
		displayActive();
	}
}
function displayActive() {
	var activeElement = document.getElementsByClassName('active');
	for (var i = 0; i < activeElement.length; i++) {
		var activeElementID = activeElement[i].getAttribute('id');
		//If active element's ID is ___, go to respective section
		console.log('active element is: ' + activeElementID);
		if (activeElementID === 'menu-am') {
			document.getElementById('about-me').style.display='inherit';
			document.getElementById('portfolio').style.display='none';
			document.getElementById('contact').style.display='none';
			document.getElementById('intro-section').style.display='none'; // This is temporary
		}
		else if (activeElementID === 'menu-p') {
			document.getElementById('portfolio').style.display='inherit';
			document.getElementById('about-me').style.display='none';
			document.getElementById('contact').style.display='none';
			document.getElementById('intro-section').style.display='none'; // This is temporary
			
		}
		else if (activeElementID === 'menu-c') {
			document.getElementById('contact').style.display='inherit';
			document.getElementById('portfolio').style.display='none';
			document.getElementById('about-me').style.display='none';
			document.getElementById('intro-section').style.display='none'; // This is temporary
		}
	}
}