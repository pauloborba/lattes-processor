import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule }   from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { GrupoComponent } from './grupos/grupo.component'
import { GrupoService } from './grupos/grupo.service';

import { MergeComponent } from './merge/merge.component';
import { MergeService } from './merge/merge.service';


import { PesquisadoresComponent } from './pesquisador/pesquisadores.component'
import { PesquisadoresService } from './pesquisador/pesquisadores.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GrupoComponent,
    PesquisadoresComponent,
    MergeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
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
      {
        path: 'merge',
        component: MergeComponent
      },
    ]),
  ],
  providers: [GrupoService,PesquisadoresService,MergeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
