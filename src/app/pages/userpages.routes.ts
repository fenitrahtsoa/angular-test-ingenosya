import { Routes, Route } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Route[] = [
    {
        path: '',
        redirectTo: '',
        pathMatch: 'full',
      },
    {

        path: '',
        children: [
            {
                path: '',
                redirectTo: 'home',
                pathMatch: 'full',
            },
            { path: 'home', component: HomeComponent, data: {title: 'Angular Ingenosya - Liste'} }
        ]
    }
];
