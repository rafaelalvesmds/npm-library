import { Component, signal } from '@angular/core';
import { RCardComponent } from "../../../../../r-components/src/lib/components/r-card/r-card.component";
import { RCodeComponent } from "../../../../../r-components/src/lib/components/r-code/r-code.component";
import { SectionModel } from '../../features-components/models/section-model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RCardComponent, RCodeComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  sections = signal<SectionModel[]>([
    {
      title: 'Instalation:',
      description: 'Run the command below to install the dependencies',
      code: 'npm install r-components'
    },
    {
      title: 'Icons reference:',
      description: 'Add in your index.html the link below',
      code: '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">'
    }
  ])


}
