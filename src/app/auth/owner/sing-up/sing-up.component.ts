import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { IndexedDBService } from '../../../service/indexed-db.service';

@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.component.html',
  styleUrls: ['./sing-up.component.scss'],
  providers: [IndexedDBService],
})
export class SingUpComponent implements OnInit {
  userName: string = '';
  userEmail: string = '';
  userPassword: string = '';

  constructor(private router: Router, private dataService: IndexedDBService) {}

  addUserBd(userName: string, userEmail: string, userPassword: string) {
    this.dataService.addUserBd(userName, userEmail, userPassword);
    this.router.navigate(['app/base']);
  }

  ngOnInit(): void {}
}
