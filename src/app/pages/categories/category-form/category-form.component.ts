import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router'
import { switchMap } from "rxjs/operators"
import toastr from "toastr"

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.css']
})
export class CategoryFormComponent implements OnInit {


  currentAction: string
  categoryForm: FormGroup
  pageTitle: string
  serverErrorMessages: string[] = null
  submittingForm: boolean = false

  constructor() { }

  ngOnInit() {
  }

}
