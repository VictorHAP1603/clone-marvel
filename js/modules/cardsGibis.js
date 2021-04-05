export class CardsGibis {
  constructor(box) {
    this.box = document.querySelector(box);
  }

  async fetchCards() {
    const cards = await await (await fetch("../gibis.json")).json();

    cards.forEach((card) => {
      let modelCard = `
        <div class="item-box">
            <img src="${card.img}" alt="" />
            <div>
            <p class="title">${card.title}</p>
            <p class="subtitle">
                ${card.year}
            </p>
            </div>
      </div>
        `;

      this.box.innerHTML += modelCard;
    });
  }

  init() {
    this.fetchCards();
  }
}
