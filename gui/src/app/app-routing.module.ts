import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormasDeAvaliacaoComponent } from '../app/formasDeAvaliacao/formasDeAvaliacao.component';

const routes: Routes = [
  { path: 'formas', component: FormasDeAvaliacaoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
