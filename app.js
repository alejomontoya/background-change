const $button = document.querySelector('#change')
const $colorText = document.querySelector('#color')
const $copy = document.querySelector('#copy')
const $copyAlert = document.querySelector('.alert-copy')

let color = '#ffffff'

function randomNumber(limit) {
  return Math.floor(Math.random() * limit) + 1
}

function randomRgbColor() {
  return `rgb(${randomNumber(255)},${randomNumber(255)},${randomNumber(255)})`
}

function randomHslColor() {
  return `hsl(${randomNumber(255)},${randomNumber(100)}%,${randomNumber(100)}%)`
}

function randomHexColor() {
  return `#${randomNumber(16777215).toString(16)}`
}

$button.addEventListener('click', () => {
  const numSwitch = randomNumber(3)
  

  switch (numSwitch) {
    case 1:
     color = randomRgbColor()
      break
    case 2:
     color = randomHslColor()
      break
    case 3:
     color = randomHexColor()
      break
    default: 
     color = randomRgbColor()
     break
  }

  $colorText.textContent = color
  document.body.style.backgroundColor = color
})

$copy.addEventListener('click', () => {
  navigator.clipboard.writeText(color)
  $copyAlert.classList.add('active')

  setTimeout(() => {
    $copyAlert.classList.remove('active')
  }, 2500)
})