import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule }   from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';

import { GrupoComponent } from './grupos/grupo.component'
import { GrupoService } from './grupos/grupo.service';

import { PesquisadoresComponent } from './pesquisador/pesquisadores.component'
import { PesquisadoresService } from './pesquisador/pesquisadores.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GrupoComponent,
    PesquisadoresComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {
        path: 'pesquisadores',
        component: PesquisadoresComponent
      },
      {
        path: 'grupos',
        component: GrupoComponent
      },
    ]),
  ],
  providers: [GrupoService,PesquisadoresService,],
  bootstrap: [AppComponent]
})
export class AppModule { }
