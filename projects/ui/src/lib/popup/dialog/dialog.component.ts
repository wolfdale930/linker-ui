import { Component } from '@angular/core';
import { ButtonConfig } from '../dialog.class';

@Component({
  selector: 'lui-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css'],
})
export class DialogComponent {
  title: string = '';
  content: string = ''
  buttons!: ButtonConfig[];
}
