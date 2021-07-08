import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './components/views/list-tarefas/list.component';
import { HomeComponent } from './components/views/home/home.component';

const routes: Routes = [
  //{path: '', component: HomeComponent},
  {path: '', pathMatch: 'full', redirectTo: 'list-tarefas'},
  {path: 'list-tarefas', component: ListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
