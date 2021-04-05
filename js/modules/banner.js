export class InitBanner {
  constructor(list, itens, controls) {
    this.list = document.querySelector(list);
    this.itens = document.querySelectorAll(itens);
    this.controls = document.querySelectorAll(controls);

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

  bindEvents() {
    this.handleBanner = this.handleBanner.bind(this);
    this.changeIten = this.changeIten.bind(this);
  }

  init() {
    this.bindEvents();
    this.controls.forEach((control, index) =>
      control.addEventListener("click", (event) => this.handleBanner(index))
    );
    this.changeIten();
  }
}
