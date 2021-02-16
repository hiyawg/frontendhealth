import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Doctor } from 'src/app/shared/security/doctor';
@Component({
  selector: 'app-edit-doctor',
  templateUrl: './edit-doctor.component.html',
  styleUrls: ['./edit-doctor.component.sass']
})
export class EditDoctorComponent {
  
    docForm : FormGroup;
    id: any;
    formdata :any;
    constructor(private http:HttpClient,private fb: FormBuilder,private actRoute:ActivatedRoute) {
      this.id = this.actRoute.snapshot.paramMap.get('id');
      this.formdata = this.createContactForm(this.id);
      console.log('in the constructor')
      console.log(this.formdata);
      
    }
   
    onSubmit() {
      console.log('Form Value', this.docForm.value);
      console.log(this.id);
      const {first,last,username,gender,dob,department,mobile,designation,
        address,education,email,password,role} = this.docForm.value;
  
      const doctorData: Doctor = {first:first,last:last,username:username,gender:gender,dob:dob,department:department,mobile:mobile,designation:designation,
        address:address,education:education,email:email,password:password,role: [role]};
      const rooturl = 'https://debrebirhanhospital.herokuapp.com/Update';      
      this.http.put(rooturl + '/' + this.id,doctorData).subscribe(data => {        
             
        console.log(data);                    
         });
    }
  createContactForm(id:any): any {
    const rooturl = 'https://debrebirhanhospital.herokuapp.com/User';      
     this.http.get(rooturl + '/' + id).subscribe(data => {
       console.log(data);
       this.formdata = data;
       this.docForm =this.fb.group({
        first: [
          this.formdata.first,
          [Validators.required, Validators.pattern('[a-zA-Z]+')]
        ],
        last: [this.formdata.last],
        gender: [this.formdata.gender, [Validators.required]],
        mobile: [this.formdata.mobile, [Validators.required]],
        password: [this.formdata.password],
        conformPassword: [this.formdata.conformPassword],
        email: [
          this.formdata.email,
          [Validators.required, Validators.email, Validators.minLength(5)]
        ],
        designation: [this.formdata.designation],
        department: [this.formdata.department],
        address: [this.formdata.address],
        dob: [this.formdata.dob, [Validators.required]],
        education: [this.formdata.education]
      });
 
     
        
    
  })
}
}
