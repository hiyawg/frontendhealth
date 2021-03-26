import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Appointment } from "./appointment.model";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
@Injectable()
export class AppointmentService {

  private readonly API_URL = 'https://debrehospital.herokuapp.com/appointement';
  dataChange: BehaviorSubject<any> = new BehaviorSubject<any>([]);
  // Temporarily stores data from dialogs
  dialogData: any;
  constructor(private httpClient: HttpClient) {}
  get data(): Appointment[] {
    return this.dataChange.value;
  }
  getDialogData() {
    return this.dialogData;
  }
  /** CRUD METHODS */
  getAllAppointments(): void {
    this.httpClient.get<any>(this.API_URL).subscribe(
      (data) => {
        this.dataChange.next(data);
        console.log(data)
        console.log(data[14].firstname);
      },
      (error: HttpErrorResponse) => {
        console.log(error.name + " " + error.message);
      }
    );
  }
  // DEMO ONLY, you can find working methods below
  addAppointment(appointment: Appointment): void {
    this.dialogData = appointment;
  }
  updateAppointment(appointment: Appointment): void {
    this.dialogData = appointment;
  }
  deleteAppointment(id: number): void {
    console.log(id);
  }
}
