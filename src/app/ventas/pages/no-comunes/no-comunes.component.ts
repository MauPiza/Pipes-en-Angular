import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [],
})
export class NoComunesComponent {
  //i18n Select Pipe
  nombre: string = 'Mauricio';
  genero: string = 'masculino';

  seleccionarGenero = {
    masculino: 'invitarlo',
    femenino: 'invitarla',
  };

  //i18n Plural Pipe
  clientes: string[] = ['Maria', 'José', 'Mauricio', 'América', 'Bernardo'];
  clientesMap = {
    '=0': 'no existen clientes en espera.',
    '=1': 'existe un cliente en espera',
    other: 'existen # clientes esperando.', // la almohadilla hace referencia al número que mostrará
  };

  cambiarPersona() {
    if (this.nombre == 'Mauricio') {
      this.nombre = 'America';
      this.genero = 'femenino';
    } else {
      this.nombre = 'Mauricio';
      this.genero = 'masculino';
    }
  }

  eliminarCliente() {
    this.clientes.pop();
  }

  //Json Pipe

  shinobis = [
    {
      nombre: 'Naruto',
      vuela: false,
      aldea: 'Hoja',
    },
    {
      nombre: 'Pain',
      vuela: true,
      aldea: 'Lluvia',
    },
    {
      nombre: 'Itachi',
      vuela: false,
      aldea: 'Hoja',
    },
  ];

  //KeyValue Pipe
  datos = {
    nombre: 'mauricio piza',
    direccion: 'Acapulco, Mexico',
    horoscopo: 'geminis',
  };

  //Async Pipe

  miObservable = interval(1000);

  miPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Se ha resuelto la promesa, hemos obtenido la data');
    }, 2500);
  });
}
