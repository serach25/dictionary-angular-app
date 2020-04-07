import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { DataManagerService } from '../data-manager.service';
import { NgForm } from '@angular/forms';
import { ReqresOther, ReqresTermOtherCreate, ReqresTermOtherCreateResponse, Definition } from "../data-classes";

@Component({
  selector: 'app-term-other-edit',
  templateUrl: './term-other-edit.component.html',
  styleUrls: ['./term-other-edit.component.css']
})
export class TermOtherEditComponent implements OnInit {

newTermOther: ReqresTermOtherCreate;
newTermOtherResult: ReqresOther;
newDefinition: Definition;

constructor(private data: DataManagerService, private route: ActivatedRoute, private router: Router) {
 
  this.newDefinition = new Definition();
  this.newTermOther = new ReqresTermOtherCreate();
  this.newTermOtherResult = new ReqresOther();

}

ngOnInit() {
  let id = this.route.snapshot.params['id'];
  this.data.reqresTermOtherGetById(id).subscribe(t => {
    this.newTermOtherResult = t; });
}

incrementLike(d) {
  let id = d._id;
  this.data.reqresOtherIncrementLike(id, this.newTermOtherResult).subscribe(t => this.newTermOtherResult = t);
  console.log("Like");
}

termOtherSave(): void {
 let id = this.route.snapshot.params['id'];
 this.newTermOtherResult.dateRevised = new Date();
  // Send request
  this.data.reqresTermOtherEdit(id, this.newDefinition).subscribe(t => this.newTermOtherResult = t);
  console.log(`Edited ${this.newTermOther.wordEnglish} the ${this.newTermOther.definitions}`);
  this.router.navigate([`/term`]);
}
  
}





 

