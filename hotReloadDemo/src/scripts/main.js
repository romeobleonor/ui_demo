document.body.onload = addElement;
function addElement(){
   var content = document.createTextNode('Dynamic content which will be added to the paragraph');
   var newElem = document.createElement('p');
   newElem.appendChild(content);

   var wrapper = document.getElementsByClassName('wrapper')[0];
   wrapper.appendChild(newElem)
}

document.write("Test - Hot reload - #10");