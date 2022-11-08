import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SingInComponent } from './auth/sing-in/sing-in.component';
import { SingUpComponent } from './auth/sing-up/sing-up.component';
import { BaseComponent } from './components/base/base.component';

import { SettingComponent } from './components/setting/setting.component';
import { UserComponent } from './auth/user/user.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,

    SingUpComponent,
    BaseComponent,

    SettingComponent,
    UserComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
