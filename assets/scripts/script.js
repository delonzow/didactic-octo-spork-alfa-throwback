// old school reminder that JS is hooked up
// alert('Garflix is live!'); 

var characters = [
  'PaRappa',
  'PJ',
  'Sunny',
  'Katy',
  'Joe'
];

// picks a random character line from the array and logs it
function greetRandomCharacter() {
  var pick = characters[Math.floor(Math.random() * characters.length)];
  console.log('Your daily PaRappa character is ' + pick);
  return pick;
}

// defensive: only run once the DOM is actually ready
document.addEventListener('DOMContentLoaded', function () {
  console.log('Parapparama loaded! Try calling greetRandomCharacter() in the console.');
  greetRandomCharacter();
});
