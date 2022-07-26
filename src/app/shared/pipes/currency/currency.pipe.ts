import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currency'
})
export class CurrencyPipe implements PipeTransform {

  transform(value: number, currency: number): number {

    //Arrondi le nombre à l'entier supérieur en cas de nombre flottant
    return Math.ceil(value*currency);
  }

}
