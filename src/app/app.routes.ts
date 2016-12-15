import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
// import { AboutComponent } from './about';
import { NoContentComponent } from './no-content/no-content.component';

import { DataResolver } from './app.resolver';


export const ROUTES: Routes = [
  { path: '',      component: HomeComponent },
  { path: 'home',  component: HomeComponent },
  // { path: 'about', component: AboutComponent },
  // {
  //   path: 'detail', loadChildren: () => System.import('./+detail')
  //     .then((comp: any) => comp.default),
  // },
  { path: '**',    component: NoContentComponent },
];
