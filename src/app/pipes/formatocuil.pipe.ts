import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatocuil'
})
export class FormatocuilPipe implements PipeTransform {

  transform(value: any): string {
    let values: string = value.toString();
  	let resultado: string = values;

    if (values.length == 14) {
        resultado = values.substring(0, 5);
        resultado += '-';
        resultado += values.substring(5, 13);
        resultado += '-';
        resultado += values.substring(13, 14);
     }
    return resultado;
  }

}
