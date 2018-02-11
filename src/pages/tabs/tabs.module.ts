import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TabsPage } from './tabs';
import { PostsPage } from '../posts/posts';
import { ProfilePage } from '../profile/profile';
import { SettingPage } from '../setting/setting';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    PostsPage,
    ProfilePage,
    SettingPage,
    TabsPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(TabsPage),
  ],
  entryComponents: [
    PostsPage,
    ProfilePage,
    SettingPage,
  ],
  exports: [
    TabsPage,
  ]
})
export class TabsPageModule { }
