import { Component, OnInit } from '@angular/core';
import { DataManagerService } from '../data-manager.service';
import { Router } from "@angular/router";
import { NgForm } from '@angular/forms';

import { ReqresEng, ReqresTermEnglishCreate, ReqresTermEnglishCreateResponse, Definition } from "../data-classes";

@Component({
  selector: 'app-term-create',
  templateUrl: './term-create.component.html',
  styleUrls: ['./term-create.component.css']
})
export class TermCreateComponent implements OnInit {

  // Data-holding properties
  newTermEnglish: ReqresTermEnglishCreate;
  newTermEnglishResult: ReqresTermEnglishCreateResponse;
  newDefinition: Definition;

  constructor(private data: DataManagerService, private router: Router) {

    this.newTermEnglish = new ReqresTermEnglishCreate();
    this.newTermEnglishResult = new ReqresTermEnglishCreateResponse();
    this.newDefinition = new Definition();
  }
 
  ngOnInit() { }
  
  termEnglishSave(): void {
    this.newTermEnglish.dateRevised = new Date();
    this.newTermEnglish.dateCreated = this.newTermEnglish.dateRevised;
    this.newDefinition.authorName = this.newTermEnglish.authorName;
    this.newTermEnglish.definitions = this.newDefinition;
    // Send request
    this.data.reqresTermEnglishAdd(this.newTermEnglish).subscribe(t => this.newTermEnglishResult = t);
    this.router.navigate([`/term`]);
  }
}
