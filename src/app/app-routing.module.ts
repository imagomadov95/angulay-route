import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BaseComponent } from './components/base/base.component';
import { SettingComponent } from './components/setting/setting.component';
import { UserComponent } from './auth/user/user.component';
import { UserGuard } from './auth/user.guard';
import { OffGuard } from './auth/off.guard';
import { ChildrenGuard } from './auth/children.guard';
const routes: Routes = [
  { path: '', component: BaseComponent },
  {
    path: 'auth',
    loadChildren: () =>
      import('./auth/owner/owner.module').then((m) => m.OwnerModule),
  },
  {
    path: 'app',
    canActivateChild: [ChildrenGuard],

    children: [
      { path: 'base', component: UserComponent },
      {
        path: 'setting',
        component: SettingComponent,
      },
    ],
  },
  { path: '**', redirectTo: 'app/base' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
