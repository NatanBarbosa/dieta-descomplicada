import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'personalizar',
    loadChildren: () => import('./personalizar/personalizar.module').then( m => m.PersonalizarPageModule)
  },
  {
    path: 'sumario',
    loadChildren: () => import('./sumario/sumario.module').then( m => m.SumarioPageModule)
  },
  {
    path: 'aprenda-mais',
    loadChildren: () => import('./aprenda-mais/aprenda-mais.module').then( m => m.AprendaMaisPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
