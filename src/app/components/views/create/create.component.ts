import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { RestApiService } from './../../../shared/rest-api.service';
import { Todo } from '../../../model/todo';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  public todoDetail = <Todo>{};
  constructor( public restApi:RestApiService, public router:Router ) { }

  ngOnInit() {
   
  }
  

  
  submit(form : any) {
    console.log(form);
    if(form.valid) {
        this.restApi.createTarefa(this.todoDetail);
        this.router.navigate(['/list']);
    } else {
    
    }
  }
  onClickCancel() {
    this.router.navigate(['/todo-list']);
  }

}
