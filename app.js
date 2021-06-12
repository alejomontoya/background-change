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
  return `#${(Math.random() * 0xfffff * 1000000).toString(16).slice(0, 6)}`
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
  // Copy color to clipboard 
  navigator.clipboard.writeText(color)

  $copyAlert.classList.add('show')

  // Remove alert after 2 seconds
  setTimeout(() => { 
    $copyAlert.classList.remove('show')
  }, 2000)
})