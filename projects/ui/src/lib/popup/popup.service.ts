import { Injectable, ViewContainerRef } from '@angular/core';
import { PopupComponent } from './popup.component';
import { ToastComponent } from './toast/toast.component';
import { DialogComponent } from './dialog/dialog.component';
import { Toast, ToastConfig } from './toast.class';
import { Dialog, DialogConfig } from './dialog.class';
import { PopupConfig } from './popup.interface';

@Injectable({
  providedIn: 'root'
})
export class PopupService {

  rootViewContainer: ViewContainerRef | undefined;
  constructor() {
  }
  setRootViewContainerRef(viewContainerRef: ViewContainerRef) {
    this.rootViewContainer = viewContainerRef
  }

  getToast(config: ToastConfig) {
    if (!this.rootViewContainer)
      throw new Error('View Container not initialized');
    return new Toast(this.rootViewContainer, config);
  }

  getDialog(config: DialogConfig) {
    if (!this.rootViewContainer)
      throw new Error('View Container not initialized');
    return new Dialog(this.rootViewContainer, config);
  }

}
