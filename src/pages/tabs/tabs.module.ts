import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TabsPage } from './tabs';
import { PostsPageModule } from '../posts/posts.module';
import { SettingPageModule } from '../setting/setting.module';
import { ProfilePageModule } from '../profile/profile.module';

@NgModule({
  declarations: [
    TabsPage,
  ],
  exports: [
    TabsPage,
  ],
  imports: [
    IonicPageModule.forChild(TabsPage),

  ]
})
export class TabsPageModule { }
