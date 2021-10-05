import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CategoryComponent } from './category/category.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LatestnewsComponent } from './latestnews/latestnews.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  {
    path:"",
    component:HomeComponent
  },
  {
    path:"category",
    component:CategoryComponent
  },
  {
    path:"about",
    component:AboutComponent
  },
  {
    path:"latest_news",
    component:LatestnewsComponent
  },
  {
    path:"contact",
    component:ContactComponent
  },
  {
    path:"details/:id",
    component:ViewComponent
  },
  {
    path:"category/details/:id",
    component:ViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
