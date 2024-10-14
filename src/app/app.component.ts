import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'czy-jest-dzis-odskocznia';

  getToday(): string {
    return new Date().toDateString();
  }

  isOdskocznia(): boolean {
    const today = new Date();
    if (today.getDay() == 2) {
      return true;
    } else {
      return false;
    }
  }
}
