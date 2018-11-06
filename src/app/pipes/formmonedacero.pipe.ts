import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formmonedacero'
})
export class FormmonedaceroPipe implements PipeTransform {

  transform(value: any, decimales: number, simbolodecimal: String, simbolomiles: String): any {
    //console.log(value);
    if (!value) {
      value = '0.000';
    }
    value = parseFloat(value).toFixed(decimales).toString();
    value = value.toString().replace('.', simbolodecimal);
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, simbolomiles);
  }

}
