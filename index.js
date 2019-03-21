const randomNumber1 = Math.floor(Math.random() * 6) + 1
const randomNumber2 = Math.floor(Math.random() * 6) + 1
//console.log(randomNumber);

$('img.img1').attr('src', `images/dice${randomNumber1}.png`)
$('img.img2').attr('src', `images/dice${randomNumber2}.png`)

if (randomNumber1 > randomNumber2){
  $('h1').html('Player 1 Wins!')
} else if (randomNumber1 < randomNumber2) {
  $('h1').html('Player 2 Wins!')
} else {
  $('h1').html('Draw!')
}
