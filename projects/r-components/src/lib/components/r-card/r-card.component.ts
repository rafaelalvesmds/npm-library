import { CommonModule } from '@angular/common';
import { Component, input, output } from '@angular/core';

@Component({
  selector: 'r-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './r-card.component.html',
  styleUrl: './r-card.component.scss'
})
export class RCardComponent {

  clickable = input<boolean>(false);
  hoverEffect = input<boolean>(false);
  bgColor = input<'white' | 'gray'>('white');

  onClick = output<Event>();

  click(e: Event) {
    this.onClick.emit(e);
  }
}
