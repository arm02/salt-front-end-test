import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './partials/navbar/navbar.component';
import { HeaderComponent } from './partials/header/header.component';
import { FooterComponent } from './partials/footer/footer.component';
import { ActivityComponent } from './content/activity/activity.component';
import { ChannelComponent } from './content/channel/channel.component';
import { DocumentComponent } from './content/document/document.component';
import { PeopleComponent } from './content/people/people.component';
import { VideosComponent } from './content/videos/videos.component';
import { SignInComponent } from './auth/signin/signin.component';
import { SignUpComponent } from './auth/signup/signup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MaterialExampleModule } from '../material.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    HeaderComponent,
    FooterComponent,
    ActivityComponent,
    ChannelComponent,
    DocumentComponent,
    PeopleComponent,
    VideosComponent,
    SignInComponent,
    SignUpComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MaterialExampleModule
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
