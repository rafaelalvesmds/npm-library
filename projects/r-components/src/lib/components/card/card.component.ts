import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'r-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss', '../style.components.scss']
})
export class RCardComponent {

  clickable = input<boolean>(true);
  houverEffect = input<boolean>(true);
}
