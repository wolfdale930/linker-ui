import { Component } from '@angular/core';

@Component({
  selector: 'lui-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.css']
})
export class ToastComponent {
  title: string = '';
  content: string = ''
}
