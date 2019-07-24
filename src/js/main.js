console.log(`Hello World from main.js! 
Change this message, and make sure it changes in the browser 
to verify that you're working in the right files.`)


const CARD_COUNT = 10
let cardURLs = []
let gameBoardUL = document.querySelector('ul.game')



for (var i = 0; i < CARD_COUNT/2; i++) {
	let cardID = Math.floor( Math.random() * 1000 )
	cardURLs.push( 'https://loremflickr.com/200/300/cat?lock='+cardID )
	cardURLs.push( 'https://loremflickr.com/200/300/cat?lock='+cardID )
}

function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

shuffle(cardURLs);

console.log(cardURLs)


let flipCard = function() {
	let flippedCount = document.querySelectorAll('.flipped').length
	console.log(flippedCount)

	if (flippedCount === 2)	{
		// there are already 2 flipped, this is an extra 3rd flip and should be ignored
	} else if (flippedCount === 0) {
		// there were none flipped before. flip this one and that's it
		this.classList.add('flipped')
	} else if (flippedCount === 1) {
		// there was one flipped before, flip this one and then check if the 2 that are now flipped match
		this.classList.add('flipped')

		let flippedCards = document.querySelectorAll('.flipped')
		let flippedCardImages = document.querySelectorAll('.flipped img')
		console.log(flippedCardImages)
		if (flippedCardImages[0].src === flippedCardImages[1].src) {
			console.log('win')
			flippedCards[1].classList.add('matched')
			flippedCards[0].classList.add('matched')
			flippedCards[1].classList.remove('flipped')
			flippedCards[0].classList.remove('flipped')

		} else {
			console.log('fail')
			setTimeout(function() {
				flippedCards[1].classList.remove('flipped')
				flippedCards[0].classList.remove('flipped')
			}, 1000)
		}

	}


}

cardURLs.forEach(function(cardURL) {
	let newCard = document.createElement('li')
	let newCardImg = document.createElement('img')
	newCardImg.src = cardURL
	newCard.appendChild(newCardImg)
	gameBoardUL.appendChild(newCard)

	newCard.addEventListener('click', flipCard)
})

