import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CompletedComponent } from './completed/completed.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [

  {
    path:'',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path:'home',
    component: HomeComponent,
  },
  {
    path:'completed',
    component: CompletedComponent,
  },
  {
    path:'users',
    component:UsersComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
