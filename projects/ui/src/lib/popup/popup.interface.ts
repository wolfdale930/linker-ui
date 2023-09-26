import { ComponentRef } from "@angular/core";

export interface Popup {
    ref: ComponentRef<any> | undefined;
    config: PopupConfig;
    open: Function;
    close: Function;

}

export interface PopupConfig {
    title: string;
    content: string;
}