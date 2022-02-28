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
import { UploadVideosComponent } from './content/videos/upload-videos/upload-videos.component';
import { UploadPeopleComponent } from './content/people/upload-people/upload-people.component';
import { UploadDocumentComponent } from './content/document/upload-document/upload-document.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { AllVideosComponent } from './content/videos/all-videos/all-videos.component';
import { AllDocumentComponent } from './content/document/all-document/all-document.component';
import { AllPeopleComponent } from './content/people/all-people/all-people.component';
import { AllChannelComponent } from './content/channel/all-channel/all-channel.component';
import { AllActivityComponent } from './content/activity/all-activity/all-activity.component';
import { UploadContentComponent } from './content/upload-content.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DetailComponent } from './content/detail/detail.component';
import { SearchComponent } from './content/search/search.component';

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
    UploadVideosComponent,
    UploadPeopleComponent,
    UploadDocumentComponent,
    AllVideosComponent,
    AllDocumentComponent,
    AllPeopleComponent,
    AllChannelComponent,
    AllActivityComponent,
    UploadContentComponent,
    DetailComponent,
    SearchComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MaterialExampleModule,
    InfiniteScrollModule,
    NgbModule
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
