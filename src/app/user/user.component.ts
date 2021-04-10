import { Component } from '@angular/core';
import { User } from '../user.model'
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  users : User[] = [
      {
        name : 'bassam',
        age: 25,
        job: 'developer'
      },
      {
        name : 'Samar',
        age: 20,
        job: 'Student'
      },
      {
        name : 'Ali',
        age: 28,
        job: 'Tester'
      }
  ]

  constructor() { }


}
