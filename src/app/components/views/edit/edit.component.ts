import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { RestApiService } from './../../../shared/rest-api.service';
import { Todo } from '../../../model/todo';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule , FormGroup} from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  id = this.actRoute.snapshot.params['id'];
todoDetail: any = {};
constructor(
public restApi: RestApiService,
public actRoute: ActivatedRoute,
public router: Router
) {
}
ngOnInit() {
this.restApi.getTarefa(this.id).subscribe((data: {}) => {
this.todoDetail= data;
})
}
// Update employee data
edit() {
if(window.confirm('Are you sure, you want to update?')){
this.restApi.updateTarefa(this.id,
this.todoDetail).subscribe(data => {
this.router.navigate(['/'])
})
}
}

onClickCancel() {
  this.router.navigate(['/']);
}

}
