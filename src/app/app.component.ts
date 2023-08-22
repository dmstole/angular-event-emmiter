import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'my-app';

  toggleValue = false;

  onClick() {
    this.toggleValue = !this.toggleValue;
  }

  onSelected(value: boolean) {
    this.toggleValue = value;
  }
}
