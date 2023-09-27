import { ComponentRef, ViewContainerRef } from "@angular/core";
import { Popup, PopupConfig } from "./popup.interface";
import { ToastComponent } from "./toast/toast.component";

export class Toast implements Popup {
    viewContainerRef: ViewContainerRef
    ref: ComponentRef<ToastComponent> | undefined;
    config: ToastConfig;
    timeoutInMs: number;
    closed: boolean = true;
    constructor(_viewContainerRef: ViewContainerRef, _config: ToastConfig) {
        this.viewContainerRef = _viewContainerRef;
        this.config = _config;
        this.timeoutInMs = _config.timeoutInMs || 5000;
    }

    open() {
        this.ref = this.viewContainerRef.createComponent(ToastComponent);
        if (this.ref) {
            this.closed = false;
            this.ref.instance.title = this.config.title;
            this.ref.instance.content = this.config.content;
            this.ref.instance.toastClick.subscribe(() => {
                if (this.config.toastClickFn)
                    this.config.toastClickFn();
                else {
                    this.close();
                }

            });
        }
        if (this.timeoutInMs > 0) {
            setTimeout(() => {
                this.close();
            }, this.timeoutInMs);
        }
    }

    close() {
        this.ref?.destroy();
        this.closed = true;
    };
}

export interface ToastConfig extends PopupConfig {
    timeoutInMs?: number;
    toastClickFn?: Function;
}