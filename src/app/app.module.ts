import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TimerComponent } from './timer/timer.component';
import { UserNameComponent } from './user-name/user-name.component';
import { FormsModule } from '@angular/forms';
import { DisabledDirective } from './disabled.directive';
import { HighlightwarningDirective } from './highlightwarning.directive';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { HeaderComponent } from './header/header.component';
@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    LoginComponent,
    RegisterComponent,
    TimerComponent,
    UserNameComponent,
    DisabledDirective,
    HighlightwarningDirective,
    HomeComponent,
    AboutComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
