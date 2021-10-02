import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {E404Component} from "./shared/components/e404/e404.component";

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then(x => x.HomeModule)
  },
  {
    path: '**',
    component: E404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
