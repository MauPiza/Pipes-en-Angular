import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'node_modules/primeng/button';
import { CardModule } from 'node_modules/primeng/card';
import { FieldsetModule } from 'node_modules/primeng/fieldset';
import { MenubarModule } from 'primeng/menubar';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [ButtonModule, CardModule, FieldsetModule, MenubarModule],
})
export class PrimeNGModule {}
