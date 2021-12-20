import { Item } from './item';
import { improve, textBeginsWith } from './methods';

export const isBackstagePass = (item: Item) => {
  return textBeginsWith(item.name, 'Backstage pass');
}

export const updateBackstagePass = (item: Item) => {
  item.sellIn -= 1;
  if (item.sellIn < 0) {
    item.quality = 0;
  } else {
    item.quality = improve(item.quality);
    /* FIXME Below violates the backstage pass specs, but is necessary to match legacy behavior
       Should be: <= 10, <= 5 */
    if (item.sellIn < 10) item.quality = improve(item.quality);
    if (item.sellIn < 5) item.quality = improve(item.quality);
  }
  return item;
}
