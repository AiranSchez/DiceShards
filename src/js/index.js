const dice = document.getElementById('dice');
const button = document.getElementById('button');

button.addEventListener('click', () => {
  var throwValue = Math.floor(Math.random() * 6) + 1;
  console.log(throwValue);
  dice.innerText = throwValue;
});
