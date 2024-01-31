import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-forms-sample',
  templateUrl: './forms-sample.component.html',
  styleUrls: ['./forms-sample.component.css']
})
export class FormsSampleComponent implements OnInit {
  myForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.myForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.maxLength(20)]],
      lastName: ['', [Validators.required, Validators.maxLength(20)]],
      middleName: ['', Validators.maxLength(20)],
      age: ['', [Validators.required, Validators.pattern('^[0-9]*$'), Validators.min(10), Validators.max(50)]],
      gender: ['male', Validators.required],
      address: this.fb.group({
        street: ['', [Validators.required, Validators.maxLength(20)]],
        landmark: ['', Validators.maxLength(20)],
        city: ['', [Validators.required, Validators.maxLength(20)]],
        state: ['', [Validators.required, Validators.maxLength(20)]],
        zipCode: ['', [Validators.required, Validators.pattern('^[0-9]*$'), Validators.maxLength(20)]],
        country: ['', [Validators.required, Validators.maxLength(20)]],
      }),
      hobbies: this.fb.array([this.fb.control('')])
    });
  }

  get hobbies() {
    return this.myForm.get('hobbies') as FormArray;
  }

  addHobby() {
    this.hobbies.push(this.fb.control(''));
  }

  onSubmit() {
    console.log(this.myForm.value);
  }
}

