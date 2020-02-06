import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  city=['ANDAMAN AND NICOBAR ISLANDS',
  'ADDRESS OF DEFENCE EMPLOYEES',
  'ANDHRA PRADESH',
' ARUNACHAL PRADESH', 
 'ASSAM',
  'BIHAR',
  'CHHATISHGARH',
'  DADRA AND NAGAR HAVELI',
'  DAMAN AND DIU',
  'DELHI',
  'GOA',
  'GUJARAT',
  'HARYANA',
'  HIMACHAL PRADESH',
'  JAMMU AND KASHMIR',
'JHARKHAND',
  'KARNATAKA',
  'KERALA',
  'LAKHSWADEEP',
  'MADHYA PRADESH',
  'MAHARASHTRA',
  'MANIPUR',
  'MEGHALAYA',
  'MIZORAM',
  'NAGALAND',
  'ORISSA',
  'PONDICHERRY',
  'PUNJAB',
  'RAJASTHAN',
  'SIKKIM',
  'TAMILNADU',
  'TRIPURA',
  'TELANGANA',
  'UTTAR PRADESH',
  'WEST BENGAL',
  'UTTRAKHAND',
  'FOREIGN ADDRESS'];

  ngOnInit() {
  }

}
