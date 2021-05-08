import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Layout1Component } from './layout1/layout1.component';

const routes: Routes = [
  { 
    path: '',
    component: Layout1Component,
    children: [
      {
        path: '',
        loadChildren: () => import("./home/home.module").then(m => m.HomeModule)
      }
    ]
  },
  { 
    path: '',
    component: Layout1Component,
    children: [
      {
        path: '',
        loadChildren: () => import("./content/content.module").then(m => m.ContentModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
