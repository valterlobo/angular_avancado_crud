import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InMemoryDatabase } from "./../in-memory-database";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDatabase),
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [BrowserModule, BrowserAnimationsModule, HttpClientModule,  FormsModule,
    ReactiveFormsModule]
})
export class CoreModule {}
