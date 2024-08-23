import { Component } from '@angular/core';
import { RButtonComponent } from "../../../../../r-components/src/lib/components/r-button/r-button.component";
import { RCardComponent } from 'r-components';
import { RCodeComponent } from '../../../../../r-components/src/lib/components/r-code/r-code.component';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [RButtonComponent, RCardComponent, RCodeComponent],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {

  codeButtonLabel = `<r-button label="Primary" />
<r-button severity="secondary" label="Secondary" />
<r-button severity="sucess" label="Sucess" />
<r-button severity="warn" label="Warn" />`;

  codeButtonIcon = `<r-button icon="home" />
<r-button severity="secondary" icon="search" />
<r-button severity="sucess" icon="check" />
<r-button severity="warn" icon="close" />`

  codeButtonLabelIcon = `<r-button label="Primary" icon="home" />
<r-button severity="secondary" label="Secondary" icon="search" />
<r-button severity="sucess" label="Sucess" icon="check" />
<r-button severity="warn" label="Warn" icon="close" />`

  onClick(e: Event) {
    console.log(e, 'Button clicked');
  }
}
