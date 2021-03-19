import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Component, Inject } from '@angular/core';
import { PatientService } from '../../patient.service';
import {
  FormControl,
  Validators,
  FormGroup,
  FormBuilder,
} from '@angular/forms';
import { Patient } from '../../patient.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-form-dialog',
  templateUrl: './form-dialog.component.html',
  styleUrls: ['./form-dialog.component.sass'],
})
export class FormDialogComponent {
  action: string;
  dialogTitle: string;
  patientForm: FormGroup;
  patient: Patient;
  doctor: any;
  doctorname: any;
  constructor(
    public dialogRef: MatDialogRef<FormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public patientService: PatientService,
    private fb: FormBuilder,
    private http: HttpClient
  ) {
    // Set the defaults
    this.action = data.action;
    if (this.action === 'edit') {
      this.dialogTitle = data.patient.name;
      this.patient = data.patient;
    } else {
      this.dialogTitle = 'New Patient';
      this.patient = new Patient({});
    }
    this.patientForm = this.createContactForm();
  }
  ngOnInit() {
    this.getAllDoctors();
  }
  formControl = new FormControl('', [
    Validators.required,
    // Validators.email,
  ]);
  getErrorMessage() {
    return this.formControl.hasError('required')
      ? 'Required field'
      : this.formControl.hasError('email')
      ? 'Not a valid email'
      : '';
  }
  createContactForm(): FormGroup {
    return this.fb.group({
      id: [this.patient.id],
      img: [this.patient.img],
      first: [this.patient.first],
      dob: [this.patient.dob],
      email: [this.patient.email],
      gender: [this.patient.gender],
      date: [this.patient.date],
      bGroup: [this.patient.bGroup],
      mobile: [this.patient.mobile],
      address: [this.patient.address],
      doctorsname: [this.patient.treatment],
    });
  }
  submit() {
    // emppty stuff
  }
  getAllDoctors(){
    this.http.get('http://localhost:8009/User/role',this.patientForm.value).subscribe(data => {
      console.log(data);
      this.doctor = data;
      //this.router.navigate(['/admin/appointment/viewAppointment']);
      
     
       
    })

  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  public confirmAdd(): void {
    this.patientService.addPatient(this.patientForm.getRawValue());
  }
}
