import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatocuit'
})
export class FormatocuitPipe implements PipeTransform {

  transform(value: any): string {
  	let values: string = value.toString();
  	let resultado: string = values;

    if (values.length == 11) {
        resultado = values.substring(0, 2);
        resultado += '-';
        resultado += values.substring(2, 10);
        resultado += '-';
        resultado += values.substring(10, 11);
     }
    return resultado;
  }

}
