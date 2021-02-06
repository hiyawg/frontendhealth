import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Doctors } from './doctors.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
@Injectable()
export class DoctorsService {
  //private readonly API_URL = 'assets/data/doctors.json';
  private readonly API_URL = 'http://localhost:8009/User/role'

  dataChange: BehaviorSubject<any> = new BehaviorSubject<any>([]);
  // Temporarily stores data from dialogs
  dialogData: any;
  constructor(private httpClient: HttpClient) {}
  get data(): Doctors[] {
    return this.dataChange.value;
  }
  getDialogData() {
    return this.dialogData;
  }
  /** CRUD METHODS */
  getAllDoctorss(): void {
    this.httpClient.get(this.API_URL).subscribe(
      data => {
        this.dataChange.next(data);
        console.log(data);
      },
      (error: HttpErrorResponse) => {
        console.log(error.name + ' ' + error.message);
      }
    );
  }
  // DEMO ONLY, you can find working methods below
  addDoctors(doctors: Doctors): void {
    this.dialogData = doctors;
  }
  updateDoctors(doctors: Doctors): void {
    this.dialogData = doctors;
  }
  deleteDoctors(id: number): void {
    console.log(id);
  }
}
