import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './components/views/create/create.component';
import { ListComponent } from './components/views/list-tarefas/list.component';
import { EditComponent } from './components/views/edit/edit.component';
import { HomeComponent } from './components/views/home/home.component';

const routes: Routes = [
  //{path: '', component: HomeComponent},
  {path: '', pathMatch: 'full', redirectTo: 'list-tarefas'},
  {path: 'list-tarefas', component: ListComponent},
  {path: 'create', component: CreateComponent},
  {path: 'edit/:id', component: EditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
