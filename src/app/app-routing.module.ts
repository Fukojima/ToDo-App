import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './components/views/list-tarefas/list.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'list-tarefas'},
  {path: 'list-tarefas', component: ListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
