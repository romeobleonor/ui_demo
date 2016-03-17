require('../scss/base.scss');

document.body.onload = addElement;
function addElement(){
   var content = document.createTextNode('Dynamic content which will be added to the paragraph');
   var newElem = document.createElement('p');
   newElem.appendChild(content);

   var wrapper = document.getElementsByClassName('dynamicContent')[0];
   wrapper.appendChild(newElem)
}
