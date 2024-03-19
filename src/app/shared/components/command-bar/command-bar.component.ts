import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-command-bar',
  templateUrl: './command-bar.component.html',
  styleUrls: ['./command-bar.component.scss']
})
export class CommandBarComponent {
  @Output() addAction = new EventEmitter<string>();
  @Output() deleteAllAction = new EventEmitter<string>();

  emitAddAction() {
    this.addAction.emit('add');
  }

  emitDeleteAllAction() {
    this.deleteAllAction.emit('delete');
  }
}
