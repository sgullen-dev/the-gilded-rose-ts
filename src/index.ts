import { Item } from './Items/item';
import { updateNormalItem } from './Items/normal';
import { isAged, updateAgedItem } from './Items/aged';
import { isBackstagePass, updateBackstagePass } from './Items/backstagePass';

export default class GildedRose {
  items: Item[];

  constructor() {
    this.items = [];
    this.items.push(new Item('+5 Dexterity Vest', 10, 20));
    this.items.push(new Item('Aged Brie', 2, 0));
    this.items.push(new Item('Elixir of the Mongoose', 5, 7));
    this.items.push(new Item('Sulfuras, Hand of Ragnaros', 0, 80));
    this.items.push(new Item('Backstage passes to a TAFKAL80ETC concert', 15, 20));
  }

  updateQuality(): this {
    this.items.forEach((item: Item) => {
      if (item.name === 'Sulfuras, Hand of Ragnaros') return;
      else if (isAged(item)) updateAgedItem(item);
      else if (isBackstagePass(item)) updateBackstagePass(item);
      else updateNormalItem(item);
    })
    return this;
  }
}
