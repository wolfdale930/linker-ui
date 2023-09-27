import { ComponentRef, ViewContainerRef } from "@angular/core";
import { Popup, PopupConfig } from "./popup.interface";
import { ToastComponent } from "./toast/toast.component";

export class Toast implements Popup {
    viewContainerRef: ViewContainerRef
    ref: ComponentRef<ToastComponent> | undefined;
    config: PopupConfig;
    timeoutInMs: number;
    constructor(_viewContainerRef: ViewContainerRef, _config: PopupConfig, _timeoutInMs?: number) {
        this.viewContainerRef = _viewContainerRef;
        this.config = _config;
        this.timeoutInMs = _timeoutInMs || 5000;
    }

    open() {
        this.ref = this.viewContainerRef.createComponent(ToastComponent);
        if (this.ref) {
            this.ref.instance.title = this.config.title;
            this.ref.instance.content = this.config.content;
        }
        if (this.timeoutInMs > 0) {
            setTimeout(() => {
                this.ref?.destroy();
            }, this.timeoutInMs);
        }
    }

    close() {
        this.ref?.destroy();
    };
}