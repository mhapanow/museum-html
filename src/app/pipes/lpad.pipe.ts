import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lpad'
})
export class LpadPipe implements PipeTransform {

  transform(value: String, limit: number, espacio?: boolean): String {
    if (!value) {
      return new Array(1 + limit).join('0');
    }
    if (espacio) {
      if ((value + '').length >= limit) {
        return value;
      } else {
        return new Array(1 + limit - (value + '').length).join('0') + value;
      }
    }
    if ((value + '').length == 0 || (value + '').length >= limit) {
      return value;
    } else {
      return new Array(1 + limit - (value + '').length).join('0') + value;
    }

  }

}
