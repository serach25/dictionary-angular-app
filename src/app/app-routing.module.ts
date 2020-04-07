import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from "./home/home.component";
import { AboutComponent } from './about/about.component';
import { ContactComponent } from "./contact/contact.component";
import { TermListComponent } from "./term-list/term-list.component";
import { TermDetailComponent } from "./term-detail/term-detail.component";
import { TermCreateComponent } from "./term-create/term-create.component";
import { TermEditComponent } from "./term-edit/term-edit.component";
import { TermOtherCreateComponent } from "./term-other-create/term-other-create.component";
import { TermOtherDetailComponent } from "./term-other-detail/term-other-detail.component";
import { TermOtherEditComponent } from "./term-other-edit/term-other-edit.component";
import { NotFoundComponent } from "./not-found/not-found.component";



const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'term', component: TermListComponent},
  { path: 'term/detail/:id', component: TermDetailComponent},
  { path: 'term/english/create', component: TermCreateComponent},
  { path: 'term/english/edit/:id', component: TermEditComponent},
  { path: 'term/other/create/:id', component: TermOtherCreateComponent},//added id of termenglish
  { path: 'term/other/detail/:id', component: TermOtherDetailComponent},//id of termOther
  { path: 'term/other/edit/:id', component: TermOtherEditComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
