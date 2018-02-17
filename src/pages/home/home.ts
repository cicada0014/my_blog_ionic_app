import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { PostingPage } from '../posting/posting';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public navCtrl: NavController,
    // public modalCtrl: ModalController
  ) {

  }


  posting() {
    console.log('start post')
    this.navCtrl.push(
      PostingPage, null, { direction: 'switch' })
    // this.modalCtrl.create(PostingModalComponent, { data: 'ff' }).present()

  }

}
