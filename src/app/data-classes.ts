// Data model classes for the app

    // TermEnglish Data Model
    export class ReqresEng {
      _id?:        string;
      wordEnglish: string;
      wordNonEnglish?:    string;  
      wordExpanded?:      string;
      authorName: string;
      fieldOfStudy: string;
      languageCode:      string = 'en';
      image?:             string;
      imageType?:         string;
      audio?:             string;
      audioType?:         string;
      linkAuthoritative?: string;
      linkWikipedia?:     string;
      linkYouTube?:       string; 
      dateCreated:     Date;
      dateRevised:     Date; 
      helpYes:           number;
      helpNo:            number;
      definitions?: [Definition];
    }

   //TermOther Data Model
  export class ReqresOther {
    _id?:              string;
    wordEnglish:       string;
    wordNonEnglish:    string;
    wordExpanded?:      string;
    languageCode:      string;
    image?:             string;
    imageType?:         string;
    audio?:             string;
    audioType?:         string;
    linkAuthoritative?: string;
    linkWikipedia?:     string;
    linkYouTube?:       string; 
    authorName:        string; 
    dateCreated:       Date;
    dateRevised:       Date; 
    fieldOfStudy:      string; 
    helpYes:           number;
    helpNo:            number;
    definitions?: [Definition];
    termEnglishId:     string;
  }
  
  //Definition Data Model
  export class Definition {
    _id?:              string;
    authorName:        string;
    dateCreated:       Date = new Date();
    definition:        string;
    quality:           number = 0; 
    likes:             number = 0;
  }  
  
  // Packaging for "add new"  and "edit existing " request for TermEnglish
  export class ReqresTermEnglishCreate {
    _id?:              string;  
    wordEnglish:        string;
    wordNonEnglish?:    string;  
    wordExpanded?:      string;
    languageCode:       string = 'en';
    image?:             string;
    imageType?:         string;
    audio?:             string;
    audioType?:         string;
    linkAuthoritative?: string;
    linkWikipedia?:     string;
    linkYouTube?:       string;
    authorName:         string;
    fieldOfStudy:       string; 
    helpYes:            number = 0;
    helpNo:             number = 0;
    dateCreated:        Date;  
    dateRevised:        Date;
    definitions?: Definition; 
  }

  // Response from "add new" POST request for TermEnglish
  export class ReqresTermEnglishCreateResponse {
    _id?: number;
    wordEnglish: string;
    dateCreated:        Date;  
    dateRevised:        Date; 
  }
  
  // Packaging for "add new"  and "edit existing " request for TermOther
  export class ReqresTermOtherCreate {
    _id?:              string;
    wordEnglish:       string;
    wordNonEnglish:    string;
    wordExpanded?:      string;
    languageCode:      string;
    image?:             string;
    imageType?:         string;
    audio?:             string;
    audioType?:         string;
    linkAuthoritative?: string;
    linkWikipedia?:     string;
    linkYouTube?:       string; 
    authorName:        string; 
    dateCreated:       Date;
    dateRevised:       Date; 
    fieldOfStudy:      string; 
    helpYes:           number;
    helpNo:            number;
    definitions?: Definition;
    termEnglishId:     string;
  }

  // Response from "add new" POST request for TermOther
  export class ReqresTermOtherCreateResponse {
    _id?: number;
    wordEnglish: string;
    wordNonEnglish: string;
    dateCreated:        Date;  
    dateRevised:        Date; 
  }