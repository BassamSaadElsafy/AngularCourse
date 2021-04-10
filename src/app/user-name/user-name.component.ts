import { Component } from '@angular/core';

@Component({
  selector: 'app-user-name',
  templateUrl: './user-name.component.html',
  styleUrls: ['./user-name.component.css']
})
export class UserNameComponent {

  username: string = 'Bassam';

  isLoggedIn = false;

  onClickBtn(): void{

    this.isLoggedIn = true;
    
  }

  logout(): void{
    this.isLoggedIn = false;
    this.username = '';

  }

  constructor() { }

}
