var ul = document.body.getElementsByTagName("ul");
var targetLi = document.getElementsByTagName("li");

//creates a new element by signifying the type of element, amount of element you want created, and the where you want the element created
function createNewElement(type, amount, location){
  for (var i = 0; i < amount; i++) {
    var newElement = document.createElement(type);
    location.appendChild(newElement);
  }
}
createNewElement("ul", 1, document.body);
createNewElement("li", 4, ul[0]);

//changes the text inside a targeted element
function changeInnerText(targetElement, text){
    targetElement.innerHTML = text;
}
changeInnerText(targetLi[1], "I be rollin'");
changeInnerText(targetLi[0], "We be rollin'");


//changes target elements color
function changeElementColor(targetElement, color){
  targetElement.style.backgroundColor = color;
}
changeElementColor(targetLi[2], "blue");

//click element to consolelog inner text
function consoleLogEvent(type, targetElement){
  targetElement.addEventListener(type, function(){
    console.log(targetElement.innerHTML);
  });
}
consoleLogEvent("click", targetLi[0]);
consoleLogEvent("mouseover", targetLi[1]);

// //create random hexidecimal color
// var letters = ["A", "B", "C", "D", "E", "F"]
// var numbers = [0,1,2,3,4,5,6,7,8,9]

// function randomColor(){
//   var str = '#';

// }
