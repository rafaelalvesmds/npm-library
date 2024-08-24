import { Component } from '@angular/core';
import { RLayoutComponent } from "../../../../../r-components/src/lib/components/r-layout/r-layout.component";

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RLayoutComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {

}
