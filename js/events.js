function makeGray() {
  document.body.style.backgroundColor = 'gray'
}

const makeBlueButton = document.getElementById('make-blue-button')
// console.log(makeBlueButton);
makeBlueButton.onclick = makeBlue

function makeBlue() {
  document.body.style.backgroundColor = 'blue'
}

const purpleButton = document.getElementById('make-purple-button')
// console.log(purpleButton);
purpleButton.onclick = function () {
  document.body.style.backgroundColor = 'purple'
}

const makeGoldenRod = document.getElementById('make-golden').addEventListener('click', function makeGolden() {
  document.body.style.backgroundColor = 'goldenrod'
})

const hotPink = document.getElementById('hot-pink').addEventListener('click', makePink)
// console.log(hotPink);


function makePink() {
  document.body.style.backgroundColor = 'hotpink'
}

document.getElementById('orange-button').addEventListener('click', function () {
  document.body.style.backgroundColor = 'orange'
})

const colorName = document.getElementsByClassName('color')
// console.log(colorName);
for (const color of colorName) {
  color.style.fontSize = '20px'
  color.style.padding = '10px'
  color.style.margin = '10px'
  color.style.borderRadius = '10px'
}