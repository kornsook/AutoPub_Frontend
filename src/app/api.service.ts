import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Publication } from './publication'

const pubURL = 'assets/data/allPapers.json';
const blackURL = 'assets/data/blacklist.json';
const userURL = 'assets/data/people.json';
const userPubURL = 'assets/data/cernyPapers.json';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { 

  }

  getCustomPublications(){
    return this.http.get(pubURL);
  }
  getPublications() {
    var publications : Publication[] = [];
    this.http.get(pubURL).subscribe(data => {
      for (const d of (data as any)) {
        publications.push({
          id: d.id,
          title: d.title,
          authors: d.listofauthors,
          doi: d.doi,
          description: d.description,
          venue: d.venue,
          citation: d.citation,
          year: d.year,
          publisher: d.publisher,
          pages: d.pages,
          volumn: d.volumn,
          number: d.number,
          bibtex: d.bibtex,
          users: d.authorsSemantic
        });
      }
    });
    return publications;
  }

  getCustomUserPublications(){
    return this.http.get(userPubURL);
  }

  getCustomUserBlacklist(){
    return this.http.get(blackURL);
  }

  blockPublicationForUser(pubId: number, user_inx: number, publications: Publication[]) {
    for(let i = 0;i < publications.length;i++) {
      if(publications[i].id == pubId){
        publications[i].users.splice(user_inx, 1);
      }
    }
    return publications;
  }

  getPublicationById(id: number, publications: Publication[]) {
    for(var publication of publications) {
      if(publication.id == id){
        return publication;
      }
    }
    return null;
  }

  copyArray(arr: any[]) {
    console.log(arr);
    var new_arr : any[] = [];
    for(var element of arr) {
      new_arr.push(element);
    }
    return new_arr;
  }
}
