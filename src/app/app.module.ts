import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TabsPage } from '../pages/tabs/tabs';
import { TabsPageModule } from '../pages/tabs/tabs.module';
import { HttpService } from '../service/http.service';
import { NgReduxModule, NgRedux } from 'ng2-redux';
import rootReducer, { AppState } from '../redux/root.reducer';
import { ComponentsModule } from '../components/components.module';
import { PostingPageModule } from '../pages/posting/posting.module';
import { HTTP } from '@ionic-native/http';
import { Camera } from '@ionic-native/camera';
import { Keyboard } from '@ionic-native/keyboard';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
  ],
  imports: [
    PostingPageModule,
    ComponentsModule,
    TabsPageModule,
    BrowserModule,
    NgReduxModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage
  ],
  providers: [
    Keyboard,
    Camera,
    StatusBar,
    SplashScreen,
    HTTP,
    HttpService,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule {
  constructor(ngRedux: NgRedux<AppState>) {
    ngRedux.configureStore(rootReducer, {});
    // socketService.init();
  }

}
