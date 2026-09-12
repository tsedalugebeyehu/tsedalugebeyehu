import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home').then((m) => m.Home),
  },
  {
    path: 'blog',
    loadComponent: () => import('./pages/blog/blog').then((m) => m.Blog),
  },
  {
    path: 'blog/:category',
    loadComponent: () => import('./pages/blog-category/blog-category').then((m) => m.BlogCategory),
  },
  {
    path: 'exercise',
    loadComponent: () => import('./pages/exercise/exercise').then((m) => m.Exercise),
  },
  {
    path: 'exercise/:category',
    loadComponent: () => import('./pages/training/training').then((m) => m.Training),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
