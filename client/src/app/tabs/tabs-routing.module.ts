import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'perfil',
        loadChildren: () => import('../perfil/perfil.module').then(m => m.PerfilPageModule)
      },
      {
        path: 'personalizar',
        loadChildren: () => import('../personalizar/personalizar.module').then(m => m.PersonalizarPageModule)
      },
      {
        path: 'sumario',
        loadChildren: () => import('../sumario/sumario.module').then(m => m.SumarioPageModule)
      },
      {
        path: 'aprenda-mais',
        loadChildren: () => import('../aprenda-mais/aprenda-mais.module').then(m => m.AprendaMaisPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/perfil',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/perfil',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
