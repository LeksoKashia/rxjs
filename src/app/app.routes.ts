import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './core/header/header.component';

export const routes: Routes = [
  { path: '', component: HomeComponent  },
  { path: 'kako', component: HeaderComponent  }
];
