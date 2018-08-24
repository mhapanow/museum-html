import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formmoneda'
})
export class FormmonedaPipe implements PipeTransform {
  transform(value: any, decimales: number, simbolodecimal: String, simbolomiles: String): any {
    if (!value) {
      return '';
    }
    value = parseFloat(value).toFixed(decimales).toString();
    value = value.toString().replace('.', simbolodecimal);
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, simbolomiles);
  }

}
