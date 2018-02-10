import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import {
  LocationStrategy,
  PathLocationStrategy
} from '@angular/common';

import { MyApp } from './app.component';
import { NgReduxModule, NgRedux } from 'ng2-redux';
import rootReducer, { AppState } from './redux/root.reducer';
import { TabsPage } from '../pages/tabs/tabs';
import { HomePage } from '../pages/home/home';
import { SuperTabsModule } from 'ionic2-super-tabs';
import { PostsPageModule } from '../pages/posts/posts.module';
import { ProfilePageModule } from '../pages/profile/profile.module';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
  ],
  imports: [
    BrowserModule,
    NgReduxModule,
    IonicModule.forRoot(MyApp),
    SuperTabsModule.forRoot(),
    PostsPageModule,
    ProfilePageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    // TabsPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    // {
    //   provide: LocationStrategy,
    //   useClass: PathLocationStrategy
    // },
  ]
})
export class AppModule {

  constructor(ngRedux: NgRedux<AppState>) {
    ngRedux.configureStore(rootReducer, {});
  }

}
