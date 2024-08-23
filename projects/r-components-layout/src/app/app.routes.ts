import { Routes } from '@angular/router';
import { CardComponent } from './features/card/card.component';
import { ButtonComponent } from './features/button/button.component';
import { HomeComponent } from './features/home/home.component';

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    { path: 'home', component: HomeComponent },
    { path: 'card', component: CardComponent },
    { path: 'button', component: ButtonComponent }
];
