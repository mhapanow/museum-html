import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'vacio'
})
export class VacioPipe implements PipeTransform {

  transform(value: String): String {
    if (value == '0') { // dejarlo con dos == ya que con === no funciona
      return '';
    }
    if (value == '0,00') { // dejarlo con dos == ya que con === no funciona
      return '';
    }
    return value;
  }

}
