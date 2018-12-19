import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formnumcuenta'
})
export class FormnumcuentaPipe implements PipeTransform {

  transform(value: any): string {
  	let values: string = value.toString();

  	let resultado: string = "";
  	if (values.length > 10 || values.length < 4) {
      return values;
    }
  	if (values.length > 3) {  		
    	resultado = values.substring(values.length-3, values.length);
  	}
  	if (values.length - 3 < 7) {
  		resultado = values.substring(0, values.length-3) + "/" + resultado;
  	}else{
  		resultado = values.substring(0, 1) + "/" + values.substring(1, 7) + "/" + resultado;
  	}
    return resultado;
  }

}
