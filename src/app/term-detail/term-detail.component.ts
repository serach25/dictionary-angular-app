import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import { DataManagerService } from '../data-manager.service';
import { ReqresEng, ReqresOther } from "../data-classes";


@Component({
  selector: 'app-term-detail',
  templateUrl: './term-detail.component.html',
  styleUrls: ['./term-detail.component.css']
})

export class TermDetailComponent implements OnInit {

termsOther: ReqresOther[]; 
termsEnglish: ReqresEng[];
termEnglish: ReqresEng;

constructor(private data: DataManagerService, private route: ActivatedRoute) { }

ngOnInit() {

  // Get the route parameter
  let id = this.route.snapshot.params['id'];
  this.data.reqresTermEnglishGetById(id).subscribe(t => this.termEnglish = t);
  // Get all terms Other
  this.data.getTermsOther().subscribe(o => this.termsOther = o);
}

incrementLike(d) {
  let id = d._id;
  this.data.reqresIncrementLike(id, this.termEnglish).subscribe(t => this.termEnglish = t);
  console.log("Like");
}

incrementHelpyes(){
  let id = this.route.snapshot.params['id'];
  this.data.reqresIncrementHelpyes(id, this.termEnglish).subscribe(t => this.termEnglish = t);
}

incrementHelpno() {
  let id = this.route.snapshot.params['id'];
  this.data.reqresIncrementHelpno(id, this.termEnglish).subscribe(t => this.termEnglish = t);
}

}
