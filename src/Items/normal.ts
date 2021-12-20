import { Item } from './item';
import { degrade } from './methods';

export const updateNormalItem = (item: Item) => {
  item.sellIn -= 1;
  item.quality = degrade(item.quality);
  if (item.sellIn < 0) item.quality = degrade(item.quality);
  return item;
}
