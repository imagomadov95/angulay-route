import { Injectable, OnInit } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateChild,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ChildrenGuard implements CanActivateChild {
  indexx = '';
  constructor() {}

  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return new Promise((resolve) => {
      let dbReq = indexedDB.open('islam', 1);
      dbReq.onsuccess = () => {
        let db = dbReq.result;

        const transaction = db.transaction('books', 'readwrite');
        const store = transaction.objectStore('books');

        let getUseractive = store.get('musa');

        getUseractive.onsuccess = () => {
          const user = getUseractive.result;
          this.indexx = user.name;
          console.log('#mz guard', {
            index: this.indexx,
            result: this.indexx === '1' ? true : false,
          });
          resolve(this.indexx === '1' ? true : false);
        };
      };
    });
    // return ;
  }
}
function setUser() {
  throw new Error('Function not implemented.');
}
