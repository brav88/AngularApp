import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MoviesComponent } from './movies/movies.component';


export const routes: Routes = [
  { path: 'login', component: LoginComponent },  
  { path: 'movies', component: MoviesComponent },  
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];