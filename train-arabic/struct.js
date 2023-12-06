import data from './data.js'

const cardContent = document.querySelector('.card-content')

let cardContentValue = "";
let cardID = 0
let buttonID = 0

data.sort((a, b) => a.id - b.id)

data.forEach(card => {
    const { russian, arabic } = card;

    cardContentValue += `
    <div class="card-content">
    <div class="card">
            <div class="front rusfont">
                ${russian}
            </div>  


            <div id="${cardID}" class="back arfont">
                ${arabic}
            </div>

            <div class="buttons">
            <button class="buttons_style" onclick="hideText(${cardID})">скрыть текст</button>
    <button id="id${buttonID}" class="buttons_style" onclick="revealLetter(${cardID})" disabled>открыть букву</button>
    <button id="id${buttonID}" class="buttons_style" onclick="revealWord(${cardID})" disabled>открыть слово</button>
    <button id="id${buttonID}" class="buttons_style" onclick="revealAll(${cardID})" disabled>открыть всё</button>
    <button id="id${buttonID}" class="buttons_style" onclick="reset(${cardID})" disabled>сброс</button>
            </div>

            
            
    </div>
    </div>
`
cardID++
buttonID++
})

cardContent.innerHTML = cardContentValue

// let flipElements = document.querySelectorAll(".card .flip");

// flipElements.forEach(el => {
//     el.addEventListener("click", flipEl)
// })

// function flipEl({ currentTarget }) {
//     currentTarget?.classList.toggle("active");

//     if (currentTarget.classList.contains("active")) {
//         const back = currentTarget.querySelector(".back");
//         currentTarget.style.height = `${back.getBoundingClientRect().height + 2}px`
//     } else {
//         const front = currentTarget.querySelector(".front");
//         currentTarget.style.height = `${front.getBoundingClientRect().height + 2}px`
//     }
// }
