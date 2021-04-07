import { InitBanner } from "./modules/banner.js";
import { BoxCards } from "./modules/cardsGibis.js";
import { LoadMore } from "./modules/news.js";
import { VideosList } from "./modules/videosList.js";

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

const loadMore = new LoadMore('[data-load="button"]', ".latest-itens");
loadMore.init();

const videosList = new VideosList(
  ".img-video-main img",
  ".list-videos",
  ".field-text-video"
);
videosList.init();

const cardComics = new BoxCards('[data-card="comics"]', "../gibis.json");
cardComics.init();
