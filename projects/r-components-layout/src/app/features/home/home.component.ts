import { Component, signal } from '@angular/core';
import { RCardComponent } from "../../../../../r-components/src/lib/components/r-card/r-card.component";
import { RCodeComponent } from "../../../../../r-components/src/lib/components/r-code/r-code.component";
import { SectionModel } from '../../features-components/models/section-model';
import { sections } from './home.data';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RCardComponent, RCodeComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  sections = sections;
}
