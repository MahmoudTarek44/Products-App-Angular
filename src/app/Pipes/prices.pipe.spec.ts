import { PricesPipe } from './prices.pipe';

describe('PricesPipe', () => {
  it('create an instance', () => {
    const pipe = new PricesPipe();
    expect(pipe).toBeTruthy();
  });
});
