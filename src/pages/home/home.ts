import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PostsPage } from '../posts/posts';
import { ProfilePage } from '../profile/profile';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  public searchKeyword: string

  private pages = [
    { label: 'Posts', page: PostsPage, id: 'posts', icon: 'document' },
    { label: 'Profile', page: ProfilePage, id: 'profile', icon: 'contact' },

  ];


  constructor(public navCtrl: NavController) {



  }
  onInput($event) {

  }

  onCancel($event) {

  }



}
