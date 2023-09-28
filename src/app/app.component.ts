import { Component, ViewContainerRef } from '@angular/core';
import { Dialog } from 'dist/ui/lib/popup/dialog.class';
import { Toast } from 'dist/ui/lib/popup/toast.class';
import { PopupService } from 'ui';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'linker-ui';
  toast: Toast | undefined;
  dialog: Dialog | undefined;
  constructor(private popupService: PopupService, private viewContainerRef: ViewContainerRef) {
    popupService.setRootViewContainerRef(viewContainerRef);
  }

  toggleToast() {
    if (!this.toast || this.toast?.closed) {
      this.toast = this.popupService.getToast({ title: 'Toast', content: 'Content' });
      this.toast.open();
    }
    else {
      this.toast.close();
      this.toast = undefined;
    }
  }

  toggleDialog() {
    if (!this.dialog || this.dialog?.closed) {
      this.dialog = this.popupService.getDialog({
        title: 'Dialog', content: 'Content', allowBackdropClose: false, buttonsConfig: [
          {
            text: 'Cancel',
            type: 'secondary',
            onClickFn: this.logOkClick.bind(this)
          }
        ]
      });
      this.dialog.open();
    }
    else
      this.dialog.close();
  }

  logOkClick(event: any) {
    console.log(event);
  }




}
