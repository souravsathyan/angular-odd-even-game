import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];
  onIntervalFired(firedNumber: number) {
    firedNumber % 2 !== 0
      ? this.oddNumbers.push(firedNumber)
      : this.evenNumbers.push(firedNumber);
  }
}
