import { Component, ElementRef, HostListener, input, signal } from '@angular/core';
import { RCardComponent } from "../r-card/r-card.component";
import { CommonModule } from '@angular/common';
import Prism from 'prismjs';

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

  ngOnInit() {
    const preElements = document.querySelectorAll('code');
    console.log(preElements, 'preElements');
    preElements.forEach((block) => {
      block.classList.add('language-typescript');
      console.log(block.classList, 'block.classList');
    });

    Prism
  }

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
