import { CommonModule } from '@angular/common';
import { Component, input, output } from '@angular/core';

@Component({
  selector: 'r-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './r-button.component.html',
  styleUrl: './r-button.component.scss'
})
export class RButtonComponent {

  label = input<string>('')
  icon = input<string>('')
  severity = input<string>('primary')
  onClick = output<Event>();

  click(e: Event) {
    this.onClick.emit(e);
  }
}
