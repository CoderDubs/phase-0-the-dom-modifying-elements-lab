// Write your code here!
var mainNode = document.getElementById("main");
if (mainNode) {
    mainNode.remove();
}

var newHeader = document.createElement('h1');
newHeader.id = 'victory';

var yoName = 'Coder Dubs'
newHeader.textContent = yoName + ' is the champion'
