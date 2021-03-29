import { Pipe, PipeTransform } from '@angular/core';
import { Color } from '../interfaces/ventas.interfaces';

@Pipe({
  name: 'color',
})
export class ColorPipe implements PipeTransform {
  transform(color: number): string {
    switch (color) {
      case 0:
        return '🔴';
        break;
      case 1:
        return '⚫';
        break;
      case 2:
        return '🔵';
        break;
      case 3:
        return '🟢';
        break;

      default:
        break;
    }
    return '';
  }
}
