import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { SingInComponent } from './sing-in/sing-in.component';
import { SingUpComponent } from './sing-up/sing-up.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [SingInComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'sing-in', component: SingInComponent },
      { path: 'sing-up', component: SingUpComponent },
    ]),
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class OwnerModule {}
