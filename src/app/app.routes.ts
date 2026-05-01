import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    title: 'Home',
    loadComponent: () => import('./pages/home/home.page').then((p) => p.HomePage),
  },
  {
    path: 'film/:id',
    title: 'Film',
    loadComponent: () => import('./pages/film/film.page').then((p) => p.FilmPage),
  },
  {
    path: 'not-found',
    title: 'Not found',
    loadComponent: () => import('./pages/not-found/not-found.page').then((p) => p.NotFoundPage),
  },
  {
    path: '**',
    redirectTo: 'not-found',
  },
];
