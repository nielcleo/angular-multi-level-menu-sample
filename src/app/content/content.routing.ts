import { Routes, RouterModule } from '@angular/router';
import { DetailsComponent } from './details/details.component';

export const ContentRoutes: Routes = [
  {  
    path:'content/:categoryId',
    component: DetailsComponent
  },
];

