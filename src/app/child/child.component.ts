import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent {
  @Output()
  selected: EventEmitter<boolean> = new EventEmitter();

  sendable = false

  onEmitValue() {
    this.sendable = !this.sendable;
    this.selected.emit(!this.sendable);
  }
}
