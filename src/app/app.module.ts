import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AndroidPermissions } from '@ionic-native/android-permissions';

import { QRScanner } from '@ionic-native/qr-scanner';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { QrscannerPage } from '../pages/qrscanner/qrscanner';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    QrscannerPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    QrscannerPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AndroidPermissions,
    QRScanner
  ]
})
export class AppModule {}
