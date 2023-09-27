import { Component } from '@angular/core';

@Component({
  selector: 'lui-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css'],
})
export class DialogComponent {
  title: string = '';
  content: string = ''
}
