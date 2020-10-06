const dice = document.getElementById('dice');
const button = document.getElementById('button');
const record = document.getElementById('list')
let result;

button.addEventListener('click', () => {
  var throwValue = Math.floor(Math.random() * 6) + 1;
  dice.innerHTML = throwValue
  createRecord(throwValue)
});

function createRecord(throwValue) {
  var node = document.createElement("LI");
  var textnode = document.createTextNode("Has lanzado: " + throwValue);
  node.appendChild(textnode);
  record.appendChild(node);
}
