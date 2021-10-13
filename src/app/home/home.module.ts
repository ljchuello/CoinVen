import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HomeRoutingModule} from './home-routing.module';
import {InicioComponent} from './pages/inicio/inicio.component';
import {MaterialModule} from "../material/material.module";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    InicioComponent
  ],
    imports: [
        CommonModule,
        HomeRoutingModule,
        MaterialModule,
        FormsModule,
    ]
})
export class HomeModule {
}
