import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule }   from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';

import { GrupoComponent } from './grupos/grupo.component';
import { GrupoService } from './grupos/grupo.service';
import { FormasDeAvaliacaoComponent } from './formasDeAvaliacao/formasDeAvaliacao.component';
import { FormasDeAvaliacaoService } from './formasDeAvaliacao/formasDeAvaliacao.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GrupoComponent,
    FormasDeAvaliacaoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'grupos',
        component: GrupoComponent
      },
      {
        path: 'formas',
        component: FormasDeAvaliacaoComponent
      },
    ]),
  ],
  providers: [GrupoService, FormasDeAvaliacaoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
