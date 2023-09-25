import { Component, ViewContainerRef } from '@angular/core';
import { PopupService } from 'ui';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'linker-ui';
  constructor(private popupService: PopupService, private viewContainerRef: ViewContainerRef) {
    popupService.setRootViewContainerRef(viewContainerRef);
    popupService.createToast({ title: 'Toast', content: 'content' });
    // popupService.createToast({ title: 'Dialog', content: 'content' });
  }




}
