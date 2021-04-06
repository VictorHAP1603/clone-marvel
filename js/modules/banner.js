export class InitBanner {
  constructor(list, itens, controls) {
    this.list = document.querySelector(list);
    this.itens = document.querySelectorAll(itens);
    this.controls = document.querySelectorAll(controls);

    this.control = document.querySelectorAll(controls);

    this.activeBanner = { active: 0 };
  }

  handleBanner(index) {
    clearInterval(this.interval);
    this.activeBanner.active = index > 4 ? 0 : index;

    const control = this.controls[this.activeBanner.active];

    this.itens.forEach((item, index) => {
      if (index === this.activeBanner.active) {
        item.classList.add("active");
        return;
      }

      item.classList.remove("active");
    });
    this.controls.forEach((control) => control.classList.remove("active"));
    control.classList.add("active");

    this.list.style.transform = `translate3d(${
      this.activeBanner.active * -100
    }vw, 0, 0)`;

    this.changeIten();
  }

  changeIten() {
    this.interval = setInterval(() => {
      this.handleBanner(this.activeBanner.active);
      this.activeBanner.active++;
    }, 5000);
  }

  addControls() {
    const box = document.querySelector(".social-medias");
    const div = document.createElement("div");
    const controlsAd = document.querySelector(".controls-added");

    if (!controlsAd) {
      div.classList.add("controls-added");

      this.itens.forEach(() => {
        const controlsSpan = document.createElement("span");
        div.append(controlsSpan);
      });

      box.parentNode.insertBefore(div, box.previousElementSibling);
      this.controls = [...div.children];
    }
  }

  removeControl() {
    const controlsAdded = document.querySelector(".controls-added");
    if (controlsAdded) {
      controlsAdded.remove();
    }
    this.controls = this.control;
  }

  bindEvents() {
    this.handleBanner = this.handleBanner.bind(this);
    this.changeIten = this.changeIten.bind(this);
    this.removeControl = this.removeControl.bind(this);
  }

  init() {
    this.bindEvents();
    this.controls.forEach((control, index) =>
      control.addEventListener("click", (event) => this.handleBanner(index))
    );
  }
}
