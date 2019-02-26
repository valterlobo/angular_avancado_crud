import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import {CalendarModule} from 'primeng/calendar';
import {IMaskModule} from 'angular-imask';
import { BreadCrumbComponent } from './components/bread-crumb/bread-crumb.component';
import { FormFieldErrorComponent } from './components/form-field-error/form-field-error.component';


@NgModule({
  declarations: [BreadCrumbComponent, FormFieldErrorComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    CalendarModule,
    IMaskModule
  ],
  exports: [  CommonModule,
    ReactiveFormsModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    CalendarModule,
    IMaskModule,
    BreadCrumbComponent,
    FormFieldErrorComponent]
})
export class SharedModule { }
