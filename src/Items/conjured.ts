import { Item } from './item';
import { degrade, textBeginsWith } from './methods';

export const isConjured = (item: Item) => {
  return textBeginsWith(item.name, 'Conjured');
}

export const updateConjuredItem = (item: Item) => {
  item.sellIn -= 1;
  item.quality = degrade(item.quality);
  item.quality = degrade(item.quality);
  if (item.sellIn < 0) item.quality = degrade(item.quality);
  if (item.sellIn < 0) item.quality = degrade(item.quality);
  return item;
}
