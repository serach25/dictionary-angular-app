import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  s: Student = { name: "Serach Boes", id: "115624181", email: "saboes@myseneca.ca", city: "Toronto" };
  constructor() { }

  ngOnInit(): void {
  }

}

class Student {
  name: string;
  id: string;
  email: string;
  city: string;
}