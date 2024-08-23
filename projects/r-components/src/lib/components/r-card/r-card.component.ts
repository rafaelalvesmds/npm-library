import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'r-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './r-card.component.html',
  styleUrl: './r-card.component.scss'
})
export class RCardComponent {

  clickable = input<boolean>(false);
  houverEffect = input<boolean>(false);
  bgColor = input<'white' | 'gray'>('white');
}
