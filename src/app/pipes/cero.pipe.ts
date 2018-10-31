import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cero'
})
export class CeroPipe implements PipeTransform {

  transform(value: any): any {
    if (!value) {
      return 0.0;
    }
    if (value === '') {
      return 0.0;
    }
    return value;
  }

}
