import { Component } from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas.interfaces';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [],
})
export class OrdenarComponent {
  ordenarPor: string = '';
  heroes: Heroe[] = [
    { nombre: 'Superman', vuela: true, color: Color.azul },
    { nombre: 'Batman', vuela: false, color: Color.negro },
    { nombre: 'Robin', vuela: false, color: Color.rojo },
    { nombre: 'Linterna Verde', vuela: true, color: Color.verde },
  ];
  nombre: string = 'Mauricio';
  enMayusculas: boolean = false;

  toUpper() {
    this.enMayusculas = !this.enMayusculas;
  }
  ordenar(ordenarPor: string) {
    this.ordenarPor = ordenarPor;
  }
}
