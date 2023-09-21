import { Component, Input } from '@angular/core';

@Component({
  selector: 'lui-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Input() type = 'primary';
  @Input() loading = false;
}
