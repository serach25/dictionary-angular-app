import { Component, OnInit } from '@angular/core';
import { DataManagerService } from '../data-manager.service';
import { ActivatedRoute, Router } from "@angular/router";
import { NgForm } from '@angular/forms';

import {ReqresEng, ReqresTermOtherCreate, ReqresTermOtherCreateResponse, Definition } from "../data-classes";

@Component({
  selector: 'app-term-other-create',
  templateUrl: './term-other-create.component.html',
  styleUrls: ['./term-other-create.component.css']
})
export class TermOtherCreateComponent implements OnInit {

  termEnglish: ReqresEng;
  newTermOther: ReqresTermOtherCreate;
  newTermOtherResult: ReqresTermOtherCreateResponse;
  newDefinition: Definition;

  constructor(private data: DataManagerService, private route: ActivatedRoute, private router: Router) {

    this.newTermOther = new ReqresTermOtherCreate();
    this.newTermOtherResult = new ReqresTermOtherCreateResponse();
    this.newDefinition = new Definition();
  }
 
  ngOnInit() { 
    let id = this.route.snapshot.params['id'];
    this.data.reqresTermEnglishGetById(id).subscribe(t => { this.termEnglish = t;
      this.newTermOther.wordEnglish = this.termEnglish.wordEnglish;
      this.newTermOther.termEnglishId = id;
    });
  }

  termEnglishSave(): void {
    this.newTermOther.dateRevised = new Date();
    this.newTermOther.dateCreated = this.newTermOther.dateRevised;
    this.newDefinition.authorName = this.newTermOther.authorName;
    this.newTermOther.definitions = this.newDefinition;
    console.log(this.newTermOther.termEnglishId);
    // Send request
    this.data.reqresTermOtherAdd(this.newTermOther).subscribe(t => this.newTermOtherResult = t);
    this.router.navigate([`/term`]);
}
}

