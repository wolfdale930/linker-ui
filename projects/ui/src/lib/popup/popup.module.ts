import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopupComponent } from '../popup/popup.component';
import { ToastComponent } from './toast/toast.component';
import { DialogComponent } from './dialog/dialog.component';
import { ButtonModule } from '../button/button.module';



@NgModule({
  declarations: [
    PopupComponent,
    ToastComponent,
    DialogComponent
  ],
  imports: [
    CommonModule,
    ButtonModule
  ],
})
export class PopupModule { }
