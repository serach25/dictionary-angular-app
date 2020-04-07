import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { catchError, tap } from "rxjs/operators";

// Import data model classes, for example...
import { ReqresEng, ReqresTermEnglishCreate, ReqresTermEnglishCreateResponse,
  ReqresTermOtherCreateResponse, ReqresTermOtherCreate, ReqresOther, Definition} from "./data-classes";

@Injectable({
  providedIn: 'root'
})
export class DataManagerService {
// Inject the HttpClient
constructor(private http: HttpClient) { }

private urlReqres: string = "https://immense-mesa-91488.herokuapp.com/api/terms/english";
private urlReqresWord: string = "https://immense-mesa-91488.herokuapp.com/api/terms/english/word";
private urlReqresAddDefinition: string = "https://immense-mesa-91488.herokuapp.com/api/terms/english/add-definition";
private urlReqresLikes: string = "https://immense-mesa-91488.herokuapp.com/api/terms/english/up-likes-count";
private urlReqresHelpyes: string = "https://immense-mesa-91488.herokuapp.com/api/terms/english/up-helpyes-count";
private urlReqresHelpno: string = "https://immense-mesa-91488.herokuapp.com/api/terms/english/up-helpno-count";
private urlReqresOther: string = "https://immense-mesa-91488.herokuapp.com/api/terms/nonenglish";
private urlReqresOtherAddDefinition: string = "https://immense-mesa-91488.herokuapp.com/api/terms/nonenglish/add-definition";
private urlReqresOtherLikes: string = "https://immense-mesa-91488.herokuapp.com/api/terms/nonenglish/up-likes-count";
private urlReqresOtherHelpyes: string = "https://immense-mesa-91488.herokuapp.com/api/terms/nonenglish/up-helpyes-count";
private urlReqresOtherHelpno: string = "https://immense-mesa-91488.herokuapp.com/api/terms/nonenglish/up-helpno-count";

// Options object for POST and PUT requests
private httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};
// Error handler, from the Angular docs
private handleError<T>(operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}

//Get All termEnglish
getTermsEnglish(): Observable<ReqresEng[]> {
  return this.http.get<ReqresEng[]>(`${this.urlReqres}`);
}

//Get one termEnglish by Id
reqresTermEnglishGetById(id: number): Observable<ReqresEng> {
  return this.http.get<ReqresEng>(`${this.urlReqres}/${id}`);
}

//Get one or some termEnglish by wordEnglish
getTermEnglishByWord(searchText: string):Observable<ReqresEng[]> {
  return this.http.get<ReqresEng[]>(`${this.urlReqresWord}/${searchText}`);
}

//Add new termEnglish
reqresTermEnglishAdd(newTermEnglish: ReqresTermEnglishCreate): Observable<ReqresTermEnglishCreateResponse> {
  return this.http.post<ReqresTermEnglishCreateResponse>(this.urlReqres, newTermEnglish, this.httpOptions)
    .pipe(
      tap((newTermEnglishResult: ReqresTermEnglishCreateResponse) => console.log(`Added item ${newTermEnglishResult.wordEnglish}`)),
      catchError(this.handleError<ReqresTermEnglishCreateResponse>('TermEnglish added'))
    );
}

//Edit existing, add Definition for termEnglish
reqresTermEnglishEdit(id: number, newItem: Definition): Observable<ReqresEng> {
  return this.http.put<ReqresEng>(`${this.urlReqresAddDefinition}/${id}`, newItem, this.httpOptions)
    .pipe(
      tap((newItem: ReqresEng) => console.log(`Edited item ${newItem.wordEnglish}`)),
      catchError(this.handleError<ReqresEng>('Term edit'))
    );
}

//Increment helpYes for termEnglish
reqresIncrementHelpyes(id: number, termEnglish: ReqresEng): Observable<ReqresEng> {
  return this.http.put<ReqresEng>(`${this.urlReqresHelpyes}/${id}`, termEnglish, this.httpOptions);
}

//Increment helpNo for termEnglish
reqresIncrementHelpno(id: number, termEnglish: ReqresEng): Observable<ReqresEng> {
  return this.http.put<ReqresEng>(`${this.urlReqresHelpno}/${id}`, termEnglish, this.httpOptions);
}

//Increment likes for termEnglish
reqresIncrementLike(id: number, termEnglish: ReqresEng): Observable<ReqresEng> {
  return this.http.put<ReqresEng>(`${this.urlReqresLikes}/${id}`, termEnglish, this.httpOptions );
}

//Get All termsNonEnglish
getTermsOther(): Observable<ReqresOther[]> {
  return this.http.get<ReqresOther[]>(`${this.urlReqresOther}`);
}

//Get one termNonEnglish
reqresTermOtherGetById(id: number): Observable<ReqresOther> {
  return this.http.get<ReqresOther>(`${this.urlReqresOther}/${id}`);
}

//Add new termNonEnglish term
reqresTermOtherAdd(newTermOther: ReqresTermOtherCreate): Observable<ReqresTermOtherCreateResponse> {
  return this.http.post<ReqresTermOtherCreateResponse>(this.urlReqresOther, newTermOther, this.httpOptions)
    .pipe(
      tap((newTermOtherResult: ReqresTermOtherCreateResponse) => console.log(`Added item ${newTermOtherResult.wordEnglish}`)),
      catchError(this.handleError<ReqresTermOtherCreateResponse>('TermNonEnglish added'))
    );
}

//Edit existing, add Definition for termEnglish
reqresTermOtherEdit(id: number, newItem: Definition): Observable<ReqresOther> {
  return this.http.put<ReqresOther>(`${this.urlReqresOtherAddDefinition}/${id}`, newItem, this.httpOptions)
    .pipe(
      tap((newItem: ReqresOther) => console.log(`Edited item ${newItem.wordEnglish}`)),
      catchError(this.handleError<ReqresOther>('Term edit'))
    );
}

//Increment helpYes for termNonEnglish
reqresOtherIncrementHelpyes(id: number, termOther: ReqresOther): Observable<ReqresOther> {
  return this.http.put<ReqresOther>(`${this.urlReqresOtherHelpyes}/${id}`, termOther, this.httpOptions);
}

//Increment helpNo for termNonEnglish
reqresOtherIncrementHelpno(id: number, termOther: ReqresOther): Observable<ReqresOther> {
  return this.http.put<ReqresOther>(`${this.urlReqresOtherHelpno}/${id}`, termOther, this.httpOptions);
}

//Increment likes for termNonEnglish
reqresOtherIncrementLike(id: number, termOther: ReqresOther): Observable<ReqresOther> {
  return this.http.put<ReqresOther>(`${this.urlReqresOtherLikes}/${id}`, termOther, this.httpOptions );
}

}
