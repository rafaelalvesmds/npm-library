import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { RCardComponent } from '../r-card/r-card.component';

@Component({
  selector: 'r-layout',
  standalone: true,
  imports: [RouterOutlet, RouterModule, RCardComponent,],
  templateUrl: './r-layout.component.html',
  styleUrl: './r-layout.component.scss'
})
export class RLayoutComponent {

}
