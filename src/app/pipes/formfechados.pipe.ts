import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formfechados'
})
export class FormfechadosPipe implements PipeTransform {

  transform(value: any, dma?: boolean): string {
    let values: string = value.toString();
    let resultado: string = values;
    if (values.length == 7) {
        resultado = values.substring(5, 7);
        resultado += '/';
        resultado += values.substring(3, 5);
        resultado += '/';
        resultado += values.substring(1, 3);
     }
     if (values.length == 6) {
        resultado = values.substring(4, 6);
        resultado += '/';
        resultado += values.substring(2, 4);
        resultado += '/';
        resultado += values.substring(0, 2);
     }
     if (values.length == 6 && dma == true) {
        resultado = values.substring(0, 2);
        resultado += '/';
        resultado += values.substring(2, 4);
        resultado += '/';
        resultado += values.substring(4, 6);
     }
    return resultado;
  }

}
