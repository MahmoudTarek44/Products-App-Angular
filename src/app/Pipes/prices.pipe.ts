import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'prices'
})
export class PricesPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
