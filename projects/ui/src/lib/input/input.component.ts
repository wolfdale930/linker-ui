import { Component, Input } from '@angular/core';

@Component({
  selector: 'lui-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {
  @Input() type: string = 'text';
}
