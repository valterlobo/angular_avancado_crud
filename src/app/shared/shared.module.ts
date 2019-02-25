import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import {CalendarModule} from 'primeng/calendar';
import {IMaskModule} from 'angular-imask';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    CalendarModule,
    IMaskModule
  ],
  exports: [  CommonModule,
    ReactiveFormsModule,
    FormsModule,
    CalendarModule,
    IMaskModule]
})
export class SharedModule { }
