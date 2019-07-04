import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LivrosComponent } from './livros/livros.component';
import { ListLivrosComponent } from "./list-livros/list-livros.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'livros', component: LivrosComponent },
  { path: 'list-livros', component: ListLivrosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
