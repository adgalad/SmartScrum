import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'cards', loadChildren: './cards/cards.module#CardsPageModule' },
  { path: 'manifest', loadChildren: './manifest/manifest.module#ManifestPageModule' },
  { path: 'roles', loadChildren: './roles/roles.module#RolesPageModule' },
  { path: 'artifacts', loadChildren: './artifacts/artifacts.module#ArtifactsPageModule' },
  { path: 'card', loadChildren: './card/card.module#CardPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
