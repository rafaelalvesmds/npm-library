import { Routes } from '@angular/router';
import { CardComponent } from './features/card/card.component';
import { ButtonComponent } from './features/button/button.component';

export const routes: Routes = [
    { path: 'card', component: CardComponent },
    { path: 'button', component: ButtonComponent }
];
