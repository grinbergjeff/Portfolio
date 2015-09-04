document.addEventListener("DOMContentLoaded", function(event) { 
	//Hide abot Me section for now
	/*document.getElementById('about-me').style.display='none';*/
	
	//Hide landing page for now to implement design for other areas
	document.getElementById('intro-section').style.display='none';
	
	makeActive();
});

/*Functions*/

function makeActive(clickedButton) {
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