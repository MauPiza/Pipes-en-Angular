import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { SharedModule } from './shared/shared.module';
import { AppRouterModule } from './app-router.module';
import { VentasModule } from './ventas/ventas.module';

/* Importaciones para idioma Local */
import localEspMX from '@angular/common/locales/es-MX'; //podemos dar el nombre que queramos
import localFrench from '@angular/common/locales/fr';
import { registerLocaleData } from '@angular/common'; //importamos la funcion para setear el idioma local
registerLocaleData(localEspMX); //Seteamos el idioma
registerLocaleData(localFrench);

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRouterModule,
    SharedModule,
    VentasModule,
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'es-MX' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
