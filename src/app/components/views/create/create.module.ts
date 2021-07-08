import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, Validator } from '@angular/forms';

import { CreateComponent } from './create.component';

import { RestApiService } from './../../../shared/rest-api.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule

  ],
  declarations: [CreateComponent],
  providers: [
    RestApiService
  ]
})
export class CreateModule { }
