export class VideosList {
  constructor(imgMain, listVideos, listText) {
    this.imgMain = document.querySelector(imgMain);
    this.listVideos = document.querySelector(listVideos);
    this.listText = document.querySelector(listText);
  }

  handleImgMain({ currentTarget }, index) {
    const img = currentTarget.querySelector("img").src;

    this.imgMain.src = img;

    [...this.listVideos.children].forEach((i) => i.classList.remove("active"));
    [...this.listText.children].forEach((t) => t.classList.remove("active"));

    currentTarget.classList.add("active");
    [...this.listText.children][index].classList.add("active");

    // this.animeLeft();
  }

  animeLeft() {
    this.listText.classList.remove("active");
    this.listText.classList.add("active");
  }

  bindEvents() {
    this.handleImgMain = this.handleImgMain.bind(this);
  }

  init() {
    this.bindEvents();
    [...this.listVideos.children].forEach((iten, index) =>
      iten.addEventListener("click", (event) =>
        this.handleImgMain(event, index)
      )
    );
  }
}
