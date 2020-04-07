import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { DataManagerService } from '../data-manager.service';
import { NgForm } from '@angular/forms';
import { ReqresEng, ReqresTermEnglishCreate, ReqresTermEnglishCreateResponse, Definition } from "../data-classes";

@Component({
  selector: 'app-term-edit',
  templateUrl: './term-edit.component.html',
  styleUrls: ['./term-edit.component.css']
})
export class TermEditComponent implements OnInit {

 newDefinition: Definition;
 newTermEnglish: ReqresTermEnglishCreate;
 termEnglish: ReqresEng;
 termsEnglish: ReqresEng[];
 
 constructor(private data: DataManagerService, private route: ActivatedRoute, private router: Router) {

   this.newTermEnglish = new ReqresTermEnglishCreate();
   this.newDefinition = new Definition();
   this.termEnglish = new ReqresEng();
}

 ngOnInit() {

   let id = this.route.snapshot.params['id'];
   this.data.reqresTermEnglishGetById(id).subscribe(t => {
     this.termEnglish = t;
   });
 }
 
 termEnglishSave(): void {
  let id = this.route.snapshot.params['id'];
  this.newTermEnglish.dateRevised = new Date();
  this.newTermEnglish.definitions = this.newDefinition;
   // Send request
   this.data.reqresTermEnglishEdit(id, this.newDefinition).subscribe(t => this.termEnglish = t);
   console.log(this.termEnglish);
   this.router.navigate([`/term`]);
 }
}
