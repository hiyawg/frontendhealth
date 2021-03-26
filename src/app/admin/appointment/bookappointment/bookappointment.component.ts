import { HttpClient, HttpClientModule } from "@angular/common/http";
import { Component,OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
@Component({
  selector: "app-bookappointment",
  templateUrl: "./bookappointment.component.html",
  styleUrls: ["./bookappointment.component.sass"],
})
export class BookappointmentComponent {
  bookingForm: FormGroup;
  hide3 = true;
  agree3 = false;
  doctor:any;
  doctorname;
  constructor(private router:Router,private fb: FormBuilder,private http:HttpClient) {
    this.bookingForm = this.fb.group({
      firstname: ["", [Validators.required, Validators.pattern("[a-zA-Z]+")]],
      lastname: [""],
      gender: ["", [Validators.required]],
      mobile: ["", [Validators.required]],
      address: [""],
      email: [
        "",
        [Validators.required, Validators.email, Validators.minLength(5)],
      ],
      dob: ["", [Validators.required]],
      doctorsname: ["", [Validators.required]],
      doa: ["", [Validators.required]],
      toa: ["", [Validators.required]],
      injury: [""],
      note: [""],
      uploadImg: [""],
    });
  }
  ngOnInit() {
    this.getAllDoctors();
  }
  onSubmit() {
    console.log("Form Value", this.bookingForm.value);
    this.http.post('https://debrehospital.herokuapp.com/appointement/',this.bookingForm.value).subscribe(data => {
      console.log(data);
      this.router.navigate(['/admin/appointment/viewAppointment']);
    })
  }
  getAllDoctors(){
    this.http.get('https://debrehospital.herokuapp.com/User/role',this.bookingForm.value).subscribe(data => {
      console.log(data);
      this.doctor = data;
      //this.router.navigate(['/admin/appointment/viewAppointment']);
      
     
       
    })

  }
}
