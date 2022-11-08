import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.component.html',
  styleUrls: ['./sing-up.component.scss'],
})
export class SingUpComponent implements OnInit {
  userName: string = '';
  userEmail: string = '';
  userPassword: string = '';

  constructor(private router: Router) {}
  addUser(userName: string, userEmail: string, userPassword: string) {
    let users = [];
    if (localStorage.getItem('users')) {
      users = JSON.parse(sessionStorage.getItem('users') ?? '[]');
    }
    const user = {
      name: userName,
      email: userEmail,
      password: userPassword,
    };
    users.push(user);

    sessionStorage.setItem('users', JSON.stringify(users));
    console.log(users);
  }
  ngOnInit(): void {}
}
