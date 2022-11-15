import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class IndexedDBService {
  myNumber = 6;
  addUserBd(userName: string, userEmail: string, userPassword: string) {
    let dbReq = indexedDB.open('islam', 1);
    dbReq.onupgradeneeded = () => {
      const books = dbReq.result.createObjectStore('books', {
        keyPath: 'id',
      });

      const indexEmail = books.createIndex('user_email', 'email');
      const indexPassword = books.createIndex('user_password', 'password');
    };

    dbReq.onsuccess = () => {
      let db = dbReq.result;

      const transaction = db.transaction('books', 'readwrite');
      const store = transaction.objectStore('books');

      const user = {
        id: userEmail,
        name: userName,
        email: userEmail,
        password: userPassword,
      };

      let request = store.put(user);
      let getUseractive = store.get('musa');

      getUseractive.onsuccess = () => {
        const user = getUseractive.result;
        user.name = '1';
        store.put(user);
      };
    };
  }
}
