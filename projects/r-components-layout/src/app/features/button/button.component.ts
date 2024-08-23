import { Component } from '@angular/core';
import { RButtonComponent } from "../../../../../r-components/src/lib/components/r-button/r-button.component";

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [RButtonComponent],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  onClick(e: Event) {
    console.log(e, 'Button clicked');
  }
}
