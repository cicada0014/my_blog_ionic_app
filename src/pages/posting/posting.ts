import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Subject } from 'rxjs/Rx';
import * as autosize from 'autosize'
import { HttpService } from '../../service/http.service';
import { Camera, CameraOptions } from '@ionic-native/camera';




/**
 * Generated class for the PostingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-posting',
  templateUrl: 'posting.html',
})
export class PostingPage {

  public contentDatas: Array<ContentData>




  public editorOptions: any = {
    maxLines: 1000,
    printMargin: false,
    wrap: true,
  };

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private httpService: HttpService,
    private camera: Camera
  ) {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }

    this.contentDatas = [
      { type: 'basic', data: '베이직' },
      { type: 'code', data: 'console.log("t")' },
      { type: 'image', data: 'asset.jpg' }
    ];

    console.log("camera")
    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64:
      let base64Image = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      // Handle error
    });

  }


  getPicture() {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PostingPage');
  }


  inputBasicData($event) {
    autosize($event.target)
    // console.log($event.target);
    // // if ($event.target.scrollHeight)
    // (<HTMLTextAreaElement>$event.target).style.height = $event.target.scrollHeight + 'px'

  }

  async uploadPost() {
    const result = await this.httpService.sendApi('api/post').post({
      item: ''
    })
    console.log(result.data)
  }

  onChange($event) {

  }
  cancelPosting() {
    this.navCtrl.pop();
  }

}


interface ContentData {
  type: string;
  data: string;
}
