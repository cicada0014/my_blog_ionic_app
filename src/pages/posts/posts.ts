import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PostsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

// @IonicPage()
@Component({
  selector: 'page-posts',
  templateUrl: 'posts.html',
})
export class PostsPage {


  public posts: Array<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.posts = [1, 2, 3, 4, 5, 6, 6, 7, 7, 4, 4, 4, 4, 4, 4, 4, 3];

  }



  ionViewDidLoad() {

  }

  doInfinite(infiniteScroll) {
    console.log('Begin async operation');

    setTimeout(() => {
      for (let i = 0; i < 30; i++) {
        this.posts.push(this.posts.length);
      }

      console.log('Async operation has ended');
      infiniteScroll.complete();
    }, 500);
  }

}
