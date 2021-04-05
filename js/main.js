import { InitBanner } from "./modules/banner.js";
import { CardsGibis } from "./modules/cardsGibis.js";

const banner = new InitBanner(
  '[data-dropdown="list"]',
  '[data-dropdown="item"]',
  '[data-dropdown="control"]'
);

banner.init();

const cardGibis = new CardsGibis('[data-card="gibi"]');
cardGibis.init();
