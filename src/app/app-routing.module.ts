import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllVideosComponent } from './content/videos/all-videos/all-videos.component';
import { AllDocumentComponent } from './content/document/all-document/all-document.component';
import { AllPeopleComponent } from './content/people/all-people/all-people.component';
import { AllActivityComponent } from './content/activity/all-activity/all-activity.component';
import { AllChannelComponent } from './content/channel/all-channel/all-channel.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'all',
    children: [
      {
        path: 'videos',
        component: AllVideosComponent,
      },
      {
        path: 'document',
        component: AllDocumentComponent,
      },
      {
        path: 'people',
        component: AllPeopleComponent,
      },
      {
        path: 'activity',
        component: AllActivityComponent,
      },
      {
        path: 'channel',
        component: AllChannelComponent,
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
