import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'mayusculas' })
export class MayusculasPipe implements PipeTransform {
  transform(value: string, applyMayus: boolean = true): string {
    if (applyMayus) {
      return value.toUpperCase();
    } else {
      return value.toLowerCase();
    }
  }
}
