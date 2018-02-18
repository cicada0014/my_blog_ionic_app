import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PostingPage } from './posting';
// import { AceEditorModule, AceEditorComponent } from 'ng2-ace-editor';
import { YtEditorComponent } from '../../components/yt-editor/yt-editor';
@NgModule({
  declarations: [
    PostingPage,
    YtEditorComponent
  ],
  exports: [
  ],
  imports: [
    IonicPageModule.forChild(PostingPage),
    // AceEditorModule
  ],
  entryComponents: [
    // AceEditorComponent
  ]
})
export class PostingPageModule { }
