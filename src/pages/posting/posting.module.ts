import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PostingPage } from './posting';
import { AceEditorModule } from 'ng2-ace-editor';
import { MediumEditorComponent } from '../../components/medium-editor/medium-editor';
@NgModule({
  declarations: [
    PostingPage,
    MediumEditorComponent
  ],
  exports: [
  ],
  imports: [
    IonicPageModule.forChild(PostingPage),
    AceEditorModule
  ],
})
export class PostingPageModule { }
