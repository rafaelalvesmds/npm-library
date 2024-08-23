import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RLayoutComponent } from "../../../r-components/src/lib/components/r-layout/r-layout.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RLayoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'r-components-layout';
}
