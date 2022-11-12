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
    let dbReq = indexedDB.open('islam', 1);
    let db;
    dbReq.onsuccess = () => {
      db = dbReq.result;
      // ПРИМЕР ПОДКЛЮЧЕНИЕ К ТАБЛИЦЕ
      const transaction = db.transaction('books', 'readwrite');
      const store = transaction.objectStore('books');
      // ПРИМЕР ПОЛУЧЕНИЯ
      const getIdslam = store.get(userEmail);
      let getUseractive = store.get('musa');
      getIdslam.onsuccess = () => {
        if (
          getIdslam.result.password === userPassword &&
          getIdslam.result.email === userEmail
        ) {
          getUseractive.onsuccess = () => {
            const user = getUseractive.result;
            user.name = '1';
            store.put(user);
          };
          this.router.navigate(['app/base']);
          console.log('store-get', getIdslam.result.password);
        }
      };
    };
  }

  ngOnInit(): void {}
}
