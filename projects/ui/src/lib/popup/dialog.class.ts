import { ComponentRef, ViewContainerRef } from "@angular/core";
import { Popup, PopupConfig } from "./popup.interface";
import { DialogComponent } from "./dialog/dialog.component";

export class Dialog implements Popup {
    viewContainerRef: ViewContainerRef
    ref: ComponentRef<DialogComponent> | undefined;
    config: PopupConfig;
    constructor(_viewContainerRef: ViewContainerRef, _config: PopupConfig) {
        this.viewContainerRef = _viewContainerRef;
        this.config = _config;
    }

    open() {
        this.ref = this.viewContainerRef.createComponent(DialogComponent);
        if (this.ref) {
            this.ref.instance.title = this.config.title;
            this.ref.instance.content = this.config.content;
        }
    }

    close() {
        this.ref?.destroy();
    };
}