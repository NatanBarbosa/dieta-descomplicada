import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SumarioPage } from './sumario.page';

const routes: Routes = [
  {
    path: '',
    component: SumarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SumarioPageRoutingModule {}
