import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactCreateComponent } from './components/contact-create/contact-create.component';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { SpListComponent } from './components/sp-list/sp-list.component';
import { SpProfileComponent } from './components/sp-profile/sp-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactCreateComponent,
    ContactListComponent,
    HeaderComponent,
    FooterComponent,
    SpListComponent,
    SpProfileComponent
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
