import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostsComponent } from './posts/posts.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManagementComponent } from './management/management.component';
import { BusinessComponent } from './business/business.component';
import { ManagementComponent2 } from './management/management2.component';

const routes: Routes = [
  { path: '', redirectTo: 'post', pathMatch: 'full' },
   { path: 'Dashboard', component : DashboardComponent },
   { path: 'Management', children: [
    { path: '', component: ManagementComponent },
  ]},
  { path: 'Management2', children: [
    { path: '', component: ManagementComponent2 },
  ]},
   { path: 'Business', component : BusinessComponent },
   { path: 'post', component : PostsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
