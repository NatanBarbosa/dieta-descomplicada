import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SumarioPageRoutingModule } from './sumario-routing.module';

import { SumarioPage } from './sumario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SumarioPageRoutingModule
  ],
  declarations: [SumarioPage]
})
export class SumarioPageModule {}
