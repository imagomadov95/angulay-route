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
    if (sessionStorage.getItem('useractive') === '1') {
      sessionStorage.setItem('useractive', JSON.stringify(0));

      confirm('выйти');
      this.router.navigate(['auth/sing-up']);
    }
  }
}
