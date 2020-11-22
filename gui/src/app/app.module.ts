import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule }   from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';

import { GrupoComponent } from './grupos/grupo.component'
import { GrupoService } from './grupos/grupo.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GrupoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {
        path: 'grupos',
        component: GrupoComponent
      },
    ]),
  ],
  providers: [GrupoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
