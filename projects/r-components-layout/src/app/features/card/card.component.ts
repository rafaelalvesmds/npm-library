import { Component } from '@angular/core';
import { RCardComponent } from '../../../../../r-components/src/lib/components/r-card/r-card.component';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [RCardComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {

}
