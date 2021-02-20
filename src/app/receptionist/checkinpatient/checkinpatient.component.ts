import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkinpatient',
  templateUrl: './checkinpatient.component.html',
  styleUrls: ['./checkinpatient.component.sass']
})
export class CheckinpatientComponent implements OnInit {
  message : any
  constructor() { 
   
  }

  ngOnInit(): void {
    this.getme();
    
  }
  getme() {
    this.message = 'hi I am here';
  }

}
