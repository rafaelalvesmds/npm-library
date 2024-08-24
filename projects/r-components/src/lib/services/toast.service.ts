import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  private toastSubject = new BehaviorSubject<{ message: string, type: 'success' | 'error' | 'info' } | null>(null);
  toast$: Observable<{ message: string, type: 'success' | 'error' | 'info' } | null> = this.toastSubject.asObservable();

  showToast(message: string, type: 'success' | 'error' | 'info'): void {
    this.toastSubject.next({ message, type });
    setTimeout(() => this.toastSubject.next(null), 3000);
  }
}
