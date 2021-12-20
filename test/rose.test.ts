import GildedRose from '../src';

describe('update', () => {
  it('works', () => {
    expect(new GildedRose()).not.toBeNull();
  });
  describe('outputs the correct results for items', () => {
    const gildedRose = new GildedRose();
    const skipDays = (days: number) => {
      while (days > 0) {
        gildedRose.updateQuality();
        days--;
      }
    }
    it('is correct on start', () => {
      expect(gildedRose.items).toEqual([
        { "name": "+5 Dexterity Vest", "quality": 20, "sellIn": 10 },
        { "name": "Aged Brie", "quality": 0, "sellIn": 2 },
        { "name": "Elixir of the Mongoose", "quality": 7, "sellIn": 5 },
        { "name": "Sulfuras, Hand of Ragnaros", "quality": 80, "sellIn": 0 },
        { "name": "Backstage passes to a TAFKAL80ETC concert", "quality": 20, "sellIn": 15 }
      ]);
    })
    it('is correct on first day', () => {
      skipDays(1);
      expect(gildedRose.items).toEqual([
        { "name": "+5 Dexterity Vest", "quality": 19, "sellIn": 9 },
        { "name": "Aged Brie", "quality": 1, "sellIn": 1 },
        { "name": "Elixir of the Mongoose", "quality": 6, "sellIn": 4 },
        { "name": "Sulfuras, Hand of Ragnaros", "quality": 80, "sellIn": 0 },
        { "name": "Backstage passes to a TAFKAL80ETC concert", "quality": 21, "sellIn": 14 }
      ]);
    })
    it('is correct after 3 days', () => {
      skipDays(2);
      expect(gildedRose.items).toEqual([
        { "name": "+5 Dexterity Vest", "quality": 17, "sellIn": 7 },
        { "name": "Aged Brie", "quality": 4, "sellIn": -1 },
        { "name": "Elixir of the Mongoose", "quality": 4, "sellIn": 2 },
        { "name": "Sulfuras, Hand of Ragnaros", "quality": 80, "sellIn": 0 },
        { "name": "Backstage passes to a TAFKAL80ETC concert", "quality": 23, "sellIn": 12 }
      ]);
    })
    it('is correct after 5 days', () => {
      skipDays(2);
      expect(gildedRose.items).toEqual([
        { "name": "+5 Dexterity Vest", "quality": 15, "sellIn": 5 },
        { "name": "Aged Brie", "quality": 8, "sellIn": -3 },
        { "name": "Elixir of the Mongoose", "quality": 2, "sellIn": 0 },
        { "name": "Sulfuras, Hand of Ragnaros", "quality": 80, "sellIn": 0 },
        // Below looks like a bug, on the 10th day it should increase by 2 to 26
        { "name": "Backstage passes to a TAFKAL80ETC concert", "quality": 25, "sellIn": 10 }
      ]);
    })
    it('is correct after 11 days', () => {
      skipDays(6);
      expect(gildedRose.items).toEqual([
        { "name": "+5 Dexterity Vest", "quality": 8, "sellIn": -1 },
        { "name": "Aged Brie", "quality": 20, "sellIn": -9 },
        { "name": "Elixir of the Mongoose", "quality": 0, "sellIn": -6 },
        { "name": "Sulfuras, Hand of Ragnaros", "quality": 80, "sellIn": 0 },
        { "name": "Backstage passes to a TAFKAL80ETC concert", "quality": 38, "sellIn": 4 }
      ]);
    })
    it('is correct after 15 days', () => {
      skipDays(4);
      expect(gildedRose.items).toEqual([
        { "name": "+5 Dexterity Vest", "quality": 0, "sellIn": -5 },
        { "name": "Aged Brie", "quality": 28, "sellIn": -13 },
        { "name": "Elixir of the Mongoose", "quality": 0, "sellIn": -10 },
        { "name": "Sulfuras, Hand of Ragnaros", "quality": 80, "sellIn": 0 },
        { "name": "Backstage passes to a TAFKAL80ETC concert", "quality": 50, "sellIn": 0 }
      ]);
    })
    it('is correct after 16 days', () => {
      skipDays(1);
      expect(gildedRose.items).toEqual([
        { "name": "+5 Dexterity Vest", "quality": 0, "sellIn": -6 },
        { "name": "Aged Brie", "quality": 30, "sellIn": -14 },
        { "name": "Elixir of the Mongoose", "quality": 0, "sellIn": -11 },
        { "name": "Sulfuras, Hand of Ragnaros", "quality": 80, "sellIn": 0 },
        { "name": "Backstage passes to a TAFKAL80ETC concert", "quality": 0, "sellIn": -1 }
      ]);
    })
  });
});

