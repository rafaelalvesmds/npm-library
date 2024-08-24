import { Component, ElementRef, HostListener, input, signal } from '@angular/core';
import { RCardComponent } from "../r-card/r-card.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'r-code',
  standalone: true,
  imports: [CommonModule, RCardComponent],
  templateUrl: './r-code.component.html',
  styleUrl: './r-code.component.scss'
})
export class RCodeComponent {
  code = input<string>('');
  width = input<string>('');
  maxWidth = input<string>('');

  copied = signal<boolean>(false);

  @HostListener('document:click', ['$event'])
  clickOut(event: MouseEvent) {
    const targetElement = event.target as HTMLElement;
    if (!targetElement.classList.contains('copy-field'))
      this.copied.set(false);
  }

  copyCode() {
    this.copied.set(true);

    const el = document.createElement('textarea');
    el.value = this.code();
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
  }
}
