import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Publication } from './publication'
import { User } from './user'

const pubURL = 'http://localhost:8080/publication';
const blackURL = 'assets/data/blacklist.json';
const userURL = 'http://localhost:8080/people';
const cernyURL = 'http://localhost:8080/publication';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { 

  }

  getUsers() {
    var users : User[] = [];
    this.http.get(userURL).subscribe(data => {
      for (const d of (data as any)) {
        users.push({
          id: d.id,
          firstname: d.firstname,
          lastname: d.lastname,
          email: d.email,
          source: d.source,
          institution: d.institution,
          url: d.url
        });
      }
    });
    return users;
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
          citation: d.citations,
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

  /*getCustomUserPublications(){
    return this.http.get(cernyURL);
  }*/

  getCustomUserPublications(userId: number){
    return this.http.get(pubURL + '/' + userId);
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

  getIdByEmail(users: User[], email: string) {
    for(let i = 0;i < users.length;i++) {
      if(users[i].email == email){
        return users[i].id;
      }      
    }
    return null;
  }
}
