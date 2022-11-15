import { Component, OnInit } from '@angular/core';
import {
  AsyncValidatorFn,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-sing-in',
  templateUrl: './sing-in.component.html',
  styleUrls: ['./sing-in.component.scss'],
})
export class SingInComponent implements OnInit {
  emailControl = new FormControl('', {
    asyncValidators: [myValidatorEmail as AsyncValidatorFn],
    validators: [Validators.required, Validators.email],
  });
  myForm: FormGroup = new FormGroup({
    // email: new FormControl('', [
    //   Validators.required,
    //   Validators.email,
    //   Validators.minLength(5),
    // ]),
    email: this.emailControl,
    password: new FormControl('', [
      Validators.required,
      myValidator,
      Validators.pattern(/[A-Za-z]+/g),
      Validators.pattern(/[0-9]+/g),
    ]),
  });

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
  submitForm() {
    console.log(this.myForm.value.email);
  }
}

function myValidator(formControl: FormControl) {
  if (formControl.value.length < 5) {
    return { myValidator: { message: 'Ошибка' } };
  }
  return null;
}

function myValidatorEmail(formControl: FormControl) {
  return Promise.resolve().then(() => {
    if (formControl.value === localStorage.getItem('islam')) {
      console.log('formControl:', formControl.value);
      return null;
    } else {
      console.log(localStorage.getItem('islam'));
      console.log('formControl:', formControl.value);
      return { e: true };
    }
  });
}
