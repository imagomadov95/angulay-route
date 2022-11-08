import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-sing-in',
  templateUrl: './sing-in.component.html',
  styleUrls: ['./sing-in.component.scss'],
})
export class SingInComponent implements OnInit {
  userEmail: string = '';
  userPassword: string = '';

  constructor(private router: Router) {}

  setUser(userEmail: string, userPassword: string) {
    const users = JSON.parse(sessionStorage.getItem('users') ?? '[]');
    console.log(users);
    if (
      users.find(
        (i: { email: string; password: string }) =>
          i.email === userEmail && i.password === userPassword
      )
    ) {
      sessionStorage.setItem('useractive', JSON.stringify(1));
      this.router.navigate(['app/base']);
    }
  }
  ngOnInit(): void {}
}
