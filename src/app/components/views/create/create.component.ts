import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { RestApiService } from './../../../shared/rest-api.service';
import { Todo } from '../../../model/todo';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule , FormGroup} from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  
  public todoId!: string;
  public todoDetail = <Todo>{};
  public mode!: string;    


  constructor( public restApi:RestApiService, public router:Router, private activatedRoute: ActivatedRoute ) { }

  ngOnInit() {

  }
  
  submit() {
    this.restApi.createTarefa(this.todoDetail).subscribe((data:
    {}) => {
    //this.router.navigate(['/employees-list'])
    })
    }
  

  onClickCancel() {
    this.router.navigate(['/']);
  }

}
