// Webpack - read this css require
require('../css/main.css');

// DOM
document.body.onload = addElement;

function addElement(){
	var newElem = document.createElement('h1');
	var newElemContent = document.createTextNode('Investors Group');

	newElem.appendChild(newElemContent);

	var mainContainer = document.getElementsByClassName('wrapper')[0];
	mainContainer.appendChild(newElem);

}
