export class LoadMore {
    constructor(button, list) {
        this.list = document.querySelector(list);
        
        this.cardsOnScreen = 4;
    }

    async writeCards() {
        const json = await (await fetch('../../news.json')).json()
        const cardsFiltered = json.slice(0, this.cardsOnScreen)

        this.list.innerHTML = "";
        cardsFiltered.forEach(card => {
            let modelCard = `
            <div class="item-box">
            <div class="img">
                <img src="${card.img}" />
            </div>
            <div class="text">
                <p class="subtitle">${card.header}</p>
                <p class="title">${card.new}</p>
                <p>${card.time}</p>
            </div>
            </div>`

            this.list.innerHTML += modelCard
        })

        this.buildButton(cardsFiltered, json)

        this.cardsOnScreen = this.cardsOnScreen + 4;
    
    }

    buildButton(cardsFiltered, json) {
        const btnField = document.querySelector('.btn-black')
        let text = '';

        
        if ( cardsFiltered.length < json.length ) {
            text = `
            <button href="#" class="btn black" data-load="button">load more</button>
            `
            btnField.innerHTML = text
            
            this.button = document.querySelector('.btn-black button')
            this.button.addEventListener('click', this.writeCards)

        } else if ( cardsFiltered.length === json.length ) {
            text = ''
            btnField.innerHTML = text

        }
       
    }

    bindEvents() {
        this.writeCards = this.writeCards.bind(this);
    }

    init() {
        this.bindEvents()
        this.writeCards();
        
    }
}