import { Component, OnInit } from '@angular/core';
import { User } from '../user'
import { ApiService } from '../api.service'
import {NgForm} from '@angular/forms';


@Component({
  selector: 'app-faculty',
  templateUrl: './faculty.component.html',
  styleUrls: ['./faculty.component.css'],
})

export class FacultyComponent implements OnInit {

private users: User[] = []
format: string = 'Javascript';
email: string = '';
output: string = '';
  constructor(private api: ApiService) { 
    
  }

  ngOnInit() {
    this.users = this.api.getUsers();

   }
   onSubmit(f: NgForm) {
    let userId = this.api.getIdByEmail(this.users, this.email);
    //let userId = 1;
    if(userId) {
        if(this.format == 'Javascript') {
            this.output = `<script>
        var url = 'http://localhost:8080/publication/notblocked/`+userId+`';
        //var url = 'cernyPapers.json';
        var HttpClient = function() {
            this.get = function(aUrl, aCallback) {
                var anHttpRequest = new XMLHttpRequest();
                anHttpRequest.onreadystatechange = function() { 
                    if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200)
                        aCallback(anHttpRequest.responseText);
                }

                anHttpRequest.open( "GET", aUrl, true );            
                anHttpRequest.send( null );
            }
        }
        document.addEventListener("DOMContentLoaded", function(){
            const target = document.getElementById('test');
            var client = new HttpClient();
            client.get(url, function(response) {
                var publications = JSON.parse(response);
                var list = "<ul>"; 
                for(let i = 0; i < publications.length;i++) {
                    list += "<li>";
                    if(publications[i].listofauthors)
                        list += publications[i].listofauthors;
                    if(publications[i].title)
                        list += ', "' + publications[i].title + '"';
                    if(publications[i].publisher)
                        list += ', ' + publications[i].publisher;
                    if(publications[i].venue)
                        list += ' ' + publications[i].venue;
                    if(publications[i].number)
                        list += '.' + publications[i].number;
                    if(publications[i].year)
                        list += ' (' + publications[i].year + ')';
                    if(publications[i].pages)
                        list += ': ' + publications[i].pages;
                    list += '.'                    
                    if(publications[i].link || publications[i].bibtex) {
                        list += ' [ ';
                        if(publications[i].link)
                            list += '<a href=\"'+publications[i].link+'\">link</a>';
                        if(publications[i].bibtex)
                            if(publications[i].link)
                                list+= ' | '
                            list += '<span style=\"cursor:pointer;color:blue;\" onclick=\"alert(\''+publications[i].bibtex+'\'')\">bib</span>';                      
                        list += ' ]';
                    }
                    list += "</li>";            
                }               
                list += "</ul>";
                target.innerHTML = list;
            });
        });
        </script>
        <div id='test'></div>`;
        }
        else if(this.format == 'JSON') {
            this.output = 'http://localhost:8080/publication/' + userId;
        }
    }
    else {
        alert('Your email address is not in the system.')
    }

   }
}
