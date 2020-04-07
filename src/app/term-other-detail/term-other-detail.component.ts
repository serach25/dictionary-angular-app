import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import { DataManagerService } from '../data-manager.service';
import { ReqresOther, ReqresEng} from "../data-classes"

@Component({
  selector: 'app-term-other-detail',
  templateUrl: './term-other-detail.component.html',
  styleUrls: ['./term-other-detail.component.css']
})
export class TermOtherDetailComponent implements OnInit {
  
termsOther: ReqresOther[];
termOther: ReqresOther;

constructor(private data: DataManagerService, private route: ActivatedRoute) { }

ngOnInit() {

  let id = this.route.snapshot.params['id'];
  this.data.reqresTermOtherGetById(id).subscribe(t => this.termOther = t);
}

incrementLike(d) {
  let id = d._id;
  this.data.reqresOtherIncrementLike(id, this.termOther).subscribe(t => this.termOther = t);
}

incrementHelpyes(){
  let id = this.route.snapshot.params['id'];
  this.data.reqresOtherIncrementHelpyes(id, this.termOther).subscribe(t => this.termOther = t);
}

incrementHelpno() {
  let id = this.route.snapshot.params['id'];
  this.data.reqresOtherIncrementHelpno(id, this.termOther).subscribe(t => this.termOther = t);
}

}










