import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AprendaMaisPageRoutingModule } from './aprenda-mais-routing.module';

import { AprendaMaisPage } from './aprenda-mais.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AprendaMaisPageRoutingModule
  ],
  declarations: [AprendaMaisPage]
})
export class AprendaMaisPageModule {}
