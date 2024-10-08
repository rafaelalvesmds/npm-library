import { Component, inject } from '@angular/core';
import { RButtonComponent } from "../../../../../r-components/src/lib/components/r-button/r-button.component";
import { RCardComponent } from 'r-components';
import { RCodeComponent } from '../../../../../r-components/src/lib/components/r-code/r-code.component';
import { buttonGroups } from './button.data';
import { ToastService } from '../../../../../r-components/src/lib/services/toast.service';
import { RToastComponent } from '../../../../../r-components/src/lib/components/r-toast/r-toast.component';
import { CommonModule } from '@angular/common';
import { DocumentationPageComponent } from "../../features-components/components/documentation-page/documentation-page.component";

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule, RButtonComponent, RCardComponent, RCodeComponent, RToastComponent, DocumentationPageComponent],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {

  buttonGroups = buttonGroups;
  importPath = "import { RButtonComponent } from \'r-components\';";
  description = "Button is an extension of the standard button element, providing support for icons and theme customization."

  toastService = inject(ToastService);

  onClick(buttonTitle: string, severity: string) {
    console.log('buttonTitle', buttonTitle);
    this.toastService.showToast('teste', 'error')
    // window.alert(`Title: ${buttonTitle}, Severity ${severity} clicked`);
  }
}