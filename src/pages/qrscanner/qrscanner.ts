import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';


import { AndroidPermissions } from '@ionic-native/android-permissions';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner';

@Component({
  selector: 'page-home',
  templateUrl: 'qrscanner.html'
})
export class QrscannerPage {

  constructor(public navCtrl: NavController,
    public platform: Platform,
    public androidPermissions: AndroidPermissions,
    public qrScanner: QRScanner) {

    // solve the problem - "plugin not installed".
    platform.ready().then(() => {
      this.qrscanner();
    })

  }

  qrscanner() {

    // start scanning
    let scanSub = this.qrScanner.scan().subscribe((text: string) => {
      console.log('Scanned something', text);
      alert(text);
      this.qrScanner.hide(); // hide camera preview
      scanSub.unsubscribe(); // stop scanning
      this.navCtrl.pop();
    }, (error) => {
      alert('Errorrrr: ' + error);
    });

    this.qrScanner.resumePreview();

    // show camera preview
    this.qrScanner.show()
      .then((data: QRScannerStatus) => {
        alert(data.showing);
      }, err => {
        alert(err);

      });

  }
}
