import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllVideosComponent } from './content/videos/all-videos/all-videos.component';
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
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
