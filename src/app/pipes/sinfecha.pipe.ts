import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sinfecha'
})
export class SinfechaPipe implements PipeTransform {

  transform(value: any): String {
    if (!value) {
      return '0/00/00';
    }
    return value;
  }

}
