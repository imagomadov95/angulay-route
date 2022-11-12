import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  canExit() {
    let dbReq = indexedDB.open('islam', 1);
    dbReq.onsuccess = () => {
      let db = dbReq.result;

      const transaction = db.transaction('books', 'readwrite');
      const store = transaction.objectStore('books');

      let getUseractive = store.get('musa');

      getUseractive.onsuccess = () => {
        const user = getUseractive.result;
        user.name = '2';
        store.put(user);
      };
    };

    confirm('выйти');
    this.router.navigate(['auth/sing-up']);
  }
}
