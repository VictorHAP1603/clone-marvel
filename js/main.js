import { InitBanner } from "./modules/banner.js";
import { BoxCards } from "./modules/cardsGibis.js";

const banner = new InitBanner(
  '[data-dropdown="list"]',
  '[data-dropdown="item"]',
  '[data-dropdown="control"]'
);

const bannerMobile = () => {
  const { matches } = matchMedia("(max-width: 852px)");

  if (matches) {
    banner.addControls();
    banner.init();
  } else {
    banner.removeControl();
    banner.init();
  }
};
bannerMobile();
window.addEventListener("resize", bannerMobile);
banner.changeIten();

banner.init();

const cardGibis = new BoxCards('[data-card="gibi"]', "../gibis.json");
cardGibis.init();

const newsCard = new BoxCards('[data-card="latest-news"]', "../news.json");
newsCard.init();
newsCard.loadMore();
