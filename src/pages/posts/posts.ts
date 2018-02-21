import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, InfiniteScroll, Content, ScrollEvent } from 'ionic-angular';
import { HttpService } from '../../service/http.service';
import { AngularFireDatabase } from 'angularfire2/database';

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


  @ViewChild(Content) content: Content;
  @ViewChild('topScroll') topScroll: ElementRef;


  public posts: Array<any>;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private httpService: HttpService,
    private angularFirebase: AngularFireDatabase
  ) {

    this.posts = [];

  }


  ngAfterViewInit() {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.

    // this.content.ionScroll.subscribe((data: ScrollEvent) => {
    //   console.log(data)
    // })
  }


  async ionViewDidLoad() {
    // const postList = await this.httpService.sendApi('api/post/list').get().toPromise()
    // this.posts.push(...<Array<any>>postList)

    // this.angularFirebase.database
    // this.angularFirebase.database.ref('/posts').orderByKey().on('child_added', (data => {
    //   console.log(data.val())
    // }))
    // console.log(this.content)

    this.angularFirebase.list('/posts').valueChanges().subscribe(data => {
      this.posts = data
      console.log(this.topScroll.nativeElement.scrollHeight)
      // this.content.scrollToBottom()
      this.content.scrollTo(0, 84)
    })
    // console.log("Tt")
    // this.httpService.getDataFromFirebase().subscribe((data: Response) => {
    //   console.log(data)
    //   // this.posts.push(data)
    // })
  }

  async doInfinite(infiniteScroll: InfiniteScroll) {

    // const postList = await this.httpService.sendApi('api/post/list').get().toPromise()
    // this.posts.push(...<Array<any>>postList)
    // infiniteScroll.complete();
  }

}
