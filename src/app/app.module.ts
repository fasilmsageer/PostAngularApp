import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddpostComponent } from './addpost/addpost.component';
import { ViewpostComponent } from './viewpost/viewpost.component';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';

const myRoute=[
  {
    path:"",
    component:AddpostComponent
  },
  {
    path:"view",
    component:ViewpostComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    AddpostComponent,
    ViewpostComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
