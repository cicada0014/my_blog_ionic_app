import { Component, ViewContainerRef, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Subject } from 'rxjs/Rx';
import * as autosize from 'autosize'
import { HttpService } from '../../service/http.service';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { YtEditorComponent } from '../../components/yt-editor/yt-editor';




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

  public contentDatas: Array<ContentData>;
  @ViewChild('ytEditor') ytEditor: YtEditorComponent

  public postContent: string;


  public editorOptions: any = {
    maxLines: 1000,
    printMargin: false,
    wrap: true,
  };

  private cameraOptions: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  }

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private httpService: HttpService,
    private camera: Camera,
    private vcr: ViewContainerRef
  ) {


    this.postContent = `<p> \u00a0</p>`

    // this.contentDatas = [
    //   { type: 'basic', data: '베이직' },
    //   { type: 'code', data: 'console.log("t")' },
    //   { type: 'image', data: 'asset.jpg' }
    // ];
  }


  getPicture() {
    this.camera.getPicture(this.cameraOptions).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64:
      let base64Image = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      // Handle error
    });

  }

  ionViewDidLoad() {
    setTimeout(() => {
      this.ytEditor.focusingEditor();
    }, 10);

  }



  inputBasicData($event) {
    autosize($event.target)
    // console.log($event.target);
    // // if ($event.target.scrollHeight)
    // (<HTMLTextAreaElement>$event.target).style.height = $event.target.scrollHeight + 'px'

  }

  uploadPost() {
    let contentHTML = '';
    for (let index = 0; index < (<HTMLCollection>this.ytEditor.editBody.nativeElement.children).length; index++) {
      contentHTML += (<HTMLCollection>this.ytEditor.editBody.nativeElement.children)[`${index}`].outerHTML;
    }
    console.log(contentHTML)


    this.httpService.sendApi('api/post/posting').post({
      contents: contentHTML,
      active: false,
      extra: null,
    }).subscribe(result => {
      console.log(result)
    })

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
