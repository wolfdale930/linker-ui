import { ComponentRef, ViewContainerRef } from "@angular/core";
import { Popup, PopupConfig } from "./popup.interface";
import { ToastComponent } from "./toast/toast.component";

export class Toast implements Popup {
    viewContainerRef: ViewContainerRef
    ref: ComponentRef<ToastComponent> | undefined;
    config: PopupConfig;
    constructor(_viewContainerRef: ViewContainerRef, _config: PopupConfig) {
        this.viewContainerRef = _viewContainerRef;
        this.config = _config;
    }

    open() {
        this.ref = this.viewContainerRef.createComponent(ToastComponent);
        if (this.ref) {
            this.ref.instance.title = this.config.title;
            this.ref.instance.content = this.config.content;
        }
    }

    close() {
        this.ref?.destroy();
    };
}