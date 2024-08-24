import { Component } from '@angular/core';
import { RCardComponent } from '../../../../../r-components/src/lib/components/r-card/r-card.component';
import { CommonModule } from '@angular/common';
import { DocumentationPageComponent } from '../../features-components/components/documentation-page/documentation-page.component';
import { RCodeComponent } from '../../../../../r-components/src/lib/components/r-code/r-code.component';
import { cardGroups } from './card.data';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, RCardComponent, DocumentationPageComponent, RCodeComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  importPath = "import { RCardComponent } from 'r-components';"
  description = 'Card is a versatile container component.'

  cardGroups: any[] = cardGroups;
}
