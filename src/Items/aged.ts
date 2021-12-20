import { Item } from './item';
import { improve, textBeginsWith } from './methods';

export const isAged = (item: Item) => {
  return textBeginsWith(item.name, 'Aged');
}

export const updateAgedItem = (item: Item) => {
  item.sellIn -= 1;
  item.quality = improve(item.quality);
  if (item.sellIn < 0) item.quality = improve(item.quality);
  return item;
}
