import { Injectable, ViewContainerRef } from '@angular/core';
import { PopupComponent } from './popup.component';
import { ToastComponent } from './toast/toast.component';
import { DialogComponent } from './dialog/dialog.component';

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

  createToast(config: PopupConfig) {
    const componentRef = this.rootViewContainer?.createComponent(ToastComponent);
    if (componentRef) {
      componentRef.instance.title = config.title;
      componentRef.instance.content = config.content;
    }
    return componentRef;
  }

  createDialog(config: PopupConfig) {
    const componentRef = this.rootViewContainer?.createComponent(DialogComponent);
    if (componentRef) {
      componentRef.instance.title = config.title;
      componentRef.instance.content = config.content;
    }
    return componentRef;
  }

}

export interface PopupConfig {
  title: string;
  content: string;
}
