import { CommonModule } from '@angular/common';
import { Component, effect, input, signal } from '@angular/core';
import { Subscription, timer } from 'rxjs';

@Component({
  selector: 'r-toast',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './r-toast.component.html',
  styleUrl: './r-toast.component.scss'
})
export class RToastComponent {

  /**
   *
   */
  constructor() {



  }

  message = input<string>('');
  type = input<'success' | 'error' | 'info'>('info');

  icon = signal<string>('');

  private toastTimer$: Subscription | undefined;

  ngOnInit(): void {
    this.showToast();

    if (this.type() === 'success')
      this.icon.set('check');
    else if (this.type() === 'error')
      this.icon.set('error');
    else if (this.type() === 'info')
      this.icon.set('info');
  }

  ngOnDestroy(): void {
    if (this.toastTimer$) {
      this.toastTimer$.unsubscribe();
    }
  }

  showToast(): void {
    const toastDiv = document.getElementById('toast');
    if (toastDiv) {
      toastDiv.classList.add('show'); 

      this.toastTimer$ = timer(3000).subscribe(() => {
        toastDiv.classList.remove('show'); 
        toastDiv.classList.add('hide');
      });
    }
  }
}
