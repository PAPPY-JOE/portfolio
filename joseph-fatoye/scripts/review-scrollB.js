
let handleScrollNext = function () {
    let cards = document.body.querySelector('#reviews-wrapper')
    cards.scrollLeft = cards.scrollLeft += window.innerWidth / 2 > 600 ? window.innerWidth / 2 : window.innerWidth -100
}

let handleScrollPrev = function() {
    let cards = document.body.querySelector('#reviews-wrapper')
    cards.scrollLeft = cards.scrollLeft -= window.innerWidth / 2 > 600 ? window.innerWidth / 2 : window.innerWidth -100
}