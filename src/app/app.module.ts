import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { DeveloperDetailPage } from '../pages/developer-detail/developer-detail';
import { AppsPage } from './../pages/apps/apps';
import { SettingsPage } from './../pages/settings/settings';

// TODO: AngularFire2
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { FIREBASE_CONFIG } from '../firebase.config';

// TODO: Providers
import { MiscProvider } from '../providers/misc/misc';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DeveloperDetailPage,
    AppsPage,
    SettingsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),    // <-- For firebase
    AngularFireDatabaseModule,
    AngularFireAuthModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DeveloperDetailPage,
    AppsPage,
    SettingsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MiscProvider
  ]
})
export class AppModule {}
