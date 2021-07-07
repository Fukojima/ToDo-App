import { RestApiService } from './../../../shared/rest-api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  Tarefas:any = [];

  constructor(public restApi:RestApiService) { }

  ngOnInit(): void {
    this.loadTarefas();
  }

  loadTarefas(){
    return this.restApi.getTarefas().subscribe((data:{})=>{
      this.Tarefas = data;
    });
  }

  deleteTarefa(id:any){
    if(window.confirm("Quer realmente excluir esta Tarefa?")){
      this.restApi.deleteTarefa(id).subscribe(data=>{
        this.loadTarefas();
      })
    }

  }

}
