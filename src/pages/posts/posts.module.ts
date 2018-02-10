import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PostsPage } from './posts';

@NgModule({
  declarations: [
    PostsPage,
  ],
  exports: [
    PostsPage
  ],
  imports: [
    IonicPageModule.forChild(PostsPage),
  ],
})
export class PostsPageModule { }
