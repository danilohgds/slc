import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  call_us() {
    alert('call us');
  }
  isNavOpen = false; // Tracks the state of the nav
  toggleNav() {
    this.isNavOpen = !this.isNavOpen; // Toggle the nav state
  }
  title = 'slc';
}
