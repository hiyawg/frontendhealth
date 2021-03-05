import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Doctor } from 'src/app/shared/security/doctor';
import { Pat } from 'src/app/shared/security/patient';
import { Patient } from 'src/app/admin/patients/allpatients/patient.model';

@Component({
  selector: 'app-registerpatient',
  templateUrl: './registerpatient.component.html',
  styleUrls: ['./registerpatient.component.sass']
})
export class RegisterpatientComponent implements OnInit {

  patientForm: FormGroup;
  constructor(private http:HttpClient,private fb: FormBuilder,private router:Router) {
    this.patientForm = this.fb.group({
      first: ['', [Validators.required, Validators.pattern('[a-zA-Z]+')]],
      last: [''],
      gender: ['', [Validators.required]],
      mobile: [''],
      dob: ['', [Validators.required]],
      age: [''],
      email: [
        '',
        [Validators.required, Validators.email, Validators.minLength(5)],
      ],
      maritalStatus: [''],
      address: [''],
      bGroup: [''],
      bPresure: [''],
      sugger: [''],
      injury: [''],
      uploadImg: [''],
    });
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  onSubmit() {
    const {first,last,gender,dob} = this.patientForm.value;

      
    
    console.log('Form Value', this.patientForm.value);
    this.http.post('https://debrebirhanhospital.herokuapp.com/Patient/',this.patientForm.value).subscribe(data => {
      console.log(data);
      this.router.navigate(['/admin/patients/all-patients']);
    })
  }

}
