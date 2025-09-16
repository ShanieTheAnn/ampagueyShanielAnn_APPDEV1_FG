import { Component, ViewEncapsulation } from '@angular/core';
import { RouterOutlet, RouterLink, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'APPDEV1_FG_EXAM';
}
