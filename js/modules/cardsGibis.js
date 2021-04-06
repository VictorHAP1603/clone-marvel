export class BoxCards {
  constructor(box, url) {
    this.box = document.querySelector(box);
    this.url = url;
  }

  async fetchCards() {
    const cards = await await (await fetch(this.url)).json();

    cards.forEach((card) => {
      let modelCard = this.cardModel(card);

      this.box.innerHTML += modelCard;
    });
  }

  cardModel(card) {
    if (this.url === "../gibis.json") {
      this.modelCard = `
      <div class="item-box">
      <div>
        <img src="${card.img}" alt="" />
        <div>
          <p class="title">${card.title}</p>
          <p class="subtitle">
              ${card.year}
          </p>
        </div>
      </div>`;
    } 

    return this.modelCard;
  }

  loadMore() {
    this.modelCard = "";
    let childrens = this.box.children;
  }

  init() {
    this.fetchCards();
  }
}
