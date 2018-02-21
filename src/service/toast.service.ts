
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { ToastController } from 'ionic-angular';


@Injectable()
export class ToastService {

    constructor(private toastCtrl: ToastController, ) {

    }


    presentToast(message: string, position?: 'top' | 'middle' | 'bottom', duration?: number, onDismiss?: (data?, role?) => {}) {
        let toast = this.toastCtrl.create({
            message: message,
            duration: duration || 3000,
            position: position || 'top'
        });
        if (onDismiss) {
            toast.onDidDismiss(onDismiss);
        }
        toast.present();
    }


}