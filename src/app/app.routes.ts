import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MoviesComponent } from './movies/movies.component';
import { TvshowsComponent } from './tvshows/tvshows.component';
import { MoviesDetailComponent } from './movies-detail/movies-detail.component';


export const routes: Routes = [
  { path: 'login', component: LoginComponent },  
  { path: 'movies', component: MoviesComponent },  
  { path: 'movies/:id', component: MoviesDetailComponent },
  { path: 'tvshows', component: TvshowsComponent },  
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];