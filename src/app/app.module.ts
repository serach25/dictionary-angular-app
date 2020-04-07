import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { TermListComponent } from './term-list/term-list.component';
import { TermDetailComponent } from './term-detail/term-detail.component';
import { TermCreateComponent } from './term-create/term-create.component';
import { TermEditComponent } from './term-edit/term-edit.component';
import { TermOtherCreateComponent } from './term-other-create/term-other-create.component';
import { TermOtherDetailComponent } from './term-other-detail/term-other-detail.component';
import { TermOtherEditComponent } from './term-other-edit/term-other-edit.component';

// These were added to enable a clean and successful "ng build --prod"

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ContactComponent,
    HomeComponent,
    AboutComponent,
    TermListComponent,
    TermDetailComponent,
    TermCreateComponent,
    TermEditComponent,
    NotFoundComponent,
    TermOtherCreateComponent,
    TermOtherDetailComponent,
    TermOtherEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
