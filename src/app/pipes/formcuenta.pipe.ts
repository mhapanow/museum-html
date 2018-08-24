import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formcuenta'
})
export class FormcuentaPipe implements PipeTransform {

  transform(value: String): String {

    if ((value + '').length != 10) {
      return value;
    }
    let resultado: String = '';
    resultado = value.substring(0, 1);
    resultado += '/';
    resultado += value.substring(1, 8);
    resultado += '/';
    resultado += value.substring(8, 10);
    return resultado;
  }

}
