import { Component, OnInit } from '@angular/core';
import { DataManagerService } from '../data-manager.service';
import { ReqresEng, Definition } from "../data-classes";
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-term-list',
  templateUrl: './term-list.component.html',
  styleUrls: ['./term-list.component.css']
})
export class TermListComponent implements OnInit {

  termsEnglish: ReqresEng[];
  termEnglish: ReqresEng;
  definition: Definition;

  searchText: string;

  constructor(private data: DataManagerService) { } 
 
  ngOnInit() {
    this.data.getTermsEnglish().subscribe(t => this.termsEnglish = t);
  }

  search() {
    if(this.searchText.length >= 3){
      this.data.getTermEnglishByWord(this.searchText).subscribe(t => this.termsEnglish = t)
    }
    if(this.searchText.length == 0){
      this.data.getTermsEnglish().subscribe(t => this.termsEnglish = t);
    }
  }
}
