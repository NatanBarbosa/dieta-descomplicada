import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AprendaMaisPage } from './aprenda-mais.page';

const routes: Routes = [
  {
    path: '',
    component: AprendaMaisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AprendaMaisPageRoutingModule {}
