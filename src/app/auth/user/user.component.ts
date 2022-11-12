import { Component, Injectable, OnInit } from '@angular/core';
import { IndexedDBService } from 'src/app/service/indexed-db.service';
import Dexie, { Table } from 'dexie';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  providers: [IndexedDBService],
})
export class UserComponent {}
