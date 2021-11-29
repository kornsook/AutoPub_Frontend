import { Component, OnInit } from '@angular/core';
import { User } from '../user'
import { ApiService } from '../api.service'
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-faculty-edit',
  templateUrl: './faculty-edit.component.html',
  styleUrls: ['./faculty-edit.component.css']
})
export class FacultyEditComponent implements OnInit {

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
    if(userId) {
      
    }
    else {
      alert("Your email address is not in the system.")
    }
    this.output = 'dd';
   }

}
