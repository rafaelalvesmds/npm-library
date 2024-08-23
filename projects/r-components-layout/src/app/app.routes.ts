import { Routes } from '@angular/router';
import { CardComponent } from './features/card/card.component';
import { ButtonComponent } from './features/button/button.component';
import { HomeComponent } from './features/home/home.component';

export const routes: Routes = [
    { path: 'card', component: CardComponent },
    { path: 'home', component: HomeComponent },
    { path: 'button', component: ButtonComponent }
];
