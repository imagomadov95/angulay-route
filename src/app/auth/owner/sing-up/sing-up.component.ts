import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { IndexedDBService } from '../../../service/indexed-db.service';

@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.component.html',
  styleUrls: ['./sing-up.component.scss'],
  providers: [IndexedDBService],
})
export class SingUpComponent implements OnInit {
  myForm: FormGroup = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.email,
      Validators.minLength(5),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      Validators.pattern(/[A-Za-z]+/g),
      Validators.pattern(/[0-9]+/g),
    ]),
    name: new FormControl('', [Validators.required, Validators.minLength(5)]),
  });

  constructor(private router: Router, public dataService: IndexedDBService) {}

  addUserBd(userName: string, userEmail: string, userPassword: string) {
    this.dataService.addUserBd(userName, userEmail, userPassword);
    this.router.navigate(['app/base']);
    localStorage.setItem('islam', 'imagomadov1995@gmail.com');
  }

  ngOnInit(): void {}
}
