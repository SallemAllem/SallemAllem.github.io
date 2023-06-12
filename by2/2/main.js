import data from '/data.js'

const cardContent = document.querySelector('.card-content')

let cardContentValue = "";

data.sort((a, b) => a.id - b.id)

data.forEach(card => {
    const { russian, arabic } = card;

    cardContentValue += `
    <div class="card">
        <div class="flip">
            <div class="front rusfont">
                ${russian}
            </div>  


            <div class="back arfont">
                ${arabic}
            </div>
        </div>
    </div>
`
})

cardContent.innerHTML = cardContentValue

let flipElements = document.querySelectorAll(".card .flip");

flipElements.forEach(el => {
    el.addEventListener("click", flipEl)
})

function flipEl({ currentTarget }) {
    currentTarget?.classList.toggle("active");

    if (currentTarget.classList.contains("active")) {
        const back = currentTarget.querySelector(".back");
        currentTarget.style.height = `${back.getBoundingClientRect().height + 2}px`
    } else {
        const front = currentTarget.querySelector(".front");
        currentTarget.style.height = `${front.getBoundingClientRect().height + 2}px`
    }
}