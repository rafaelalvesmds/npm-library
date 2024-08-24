import { CommonModule } from '@angular/common';
import { Component, inject, input } from '@angular/core';
import { RCardComponent } from '../../../../../../r-components/src/public-api';
import { RCodeComponent } from '../../../../../../r-components/src/lib/components/r-code/r-code.component';
import { RToastComponent } from '../../../../../../r-components/src/lib/components/r-toast/r-toast.component';
import { ToastService } from '../../../../../../r-components/src/lib/services/toast.service';
import { RButtonComponent } from 'r-components';

@Component({
  selector: 'app-documentation-page',
  standalone: true,
  imports: [CommonModule, RCardComponent, RButtonComponent, RCodeComponent, RToastComponent],
  templateUrl: './documentation-page.component.html',
  styleUrl: './documentation-page.component.scss'
})
export class DocumentationPageComponent {
  componentName = input<string>('');
  description = input<string>('');
  
  importPath = input<string>('');

  toastService = inject(ToastService);

}
