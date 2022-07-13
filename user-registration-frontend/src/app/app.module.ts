import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserRegistrationServiceService } from './user-registration-service';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { UserSearchDeleteComponent } from './user-search-delete/user-search-delete.component';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
@NgModule({
  declarations: [
    AppComponent,
    UserRegistrationComponent,
    UserSearchDeleteComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [UserRegistrationServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
