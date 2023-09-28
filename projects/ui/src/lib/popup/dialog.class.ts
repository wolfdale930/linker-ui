import { ComponentRef, ViewContainerRef } from "@angular/core";
import { Popup, PopupConfig } from "./popup.interface";
import { DialogComponent } from "./dialog/dialog.component";

export class Dialog implements Popup {
    viewContainerRef: ViewContainerRef
    ref: ComponentRef<DialogComponent> | undefined;
    config: DialogConfig;
    closed: boolean = true;
    constructor(_viewContainerRef: ViewContainerRef, _config: DialogConfig) {
        this.viewContainerRef = _viewContainerRef;
        this.config = _config;
    }

    open() {
        this.ref = this.viewContainerRef.createComponent(DialogComponent);
        if (this.ref) {
            this.closed = false;
            this.ref.instance.title = this.config.title;
            this.ref.instance.content = this.config.content;
            if (!this.config.buttonsConfig) {
                this.config.buttonsConfig = [
                    {
                        text: 'Ok',
                        type: 'primary',
                        onClickFn: this.close.bind(this)
                    }
                ];
            }
            this.ref.instance.buttons = this.config.buttonsConfig;
            if (this.config.allowBackdropClose === undefined || this.config.allowBackdropClose === true)
                this.ref.instance.backdropClose.subscribe(() => this.close());
        }
    }

    close() {
        this.ref?.destroy();
        this.closed = true;
    };
}

export interface DialogConfig extends PopupConfig {
    buttonsConfig?: ButtonConfig[];
    allowBackdropClose?: boolean;
}

export interface ButtonConfig {
    text: string;
    type: string;
    onClickFn: Function;
}