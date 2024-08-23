import { Component, computed, effect, Host, HostListener, inject, input, signal } from '@angular/core';
import { NavigationEnd, Router, RouterModule, RouterOutlet } from '@angular/router';
import { RCardComponent } from '../r-card/r-card.component';
import { RButtonComponent } from "../r-button/r-button.component";
import { filter } from 'rxjs';

@Component({
  selector: 'r-layout',
  standalone: true,
  imports: [RouterOutlet, RouterModule, RCardComponent, RButtonComponent],
  templateUrl: './r-layout.component.html',
  styleUrl: './r-layout.component.scss'
})
export class RLayoutComponent {

  currentRoute = signal<string>('');
  pageWidth = signal<number>(0);
  router = inject(Router)

  constructor() {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.currentRoute.set(this.router.url);
      });
  }

  ngOnInit() {
    if (typeof window !== 'undefined')
      this.pageWidth.set(window.innerWidth);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.pageWidth.set(event.target.innerWidth);
  }

  menuItems = input<any>([
    { label: 'Get started', icon: 'home', routerLink: 'home' },
    { label: 'Button', icon: 'home', routerLink: 'button' },
    { label: 'Card', icon: 'info', routerLink: 'card' },
  ]);
}
