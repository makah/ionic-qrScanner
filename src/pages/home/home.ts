import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';

import { AndroidPermissions } from '@ionic-native/android-permissions';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner';
import { QrscannerPage } from '../qrscanner/qrscanner';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,
    public platform: Platform,
    public androidPermissions: AndroidPermissions,
    public qrScanner: QRScanner) {

  }

  push() {
    this.navCtrl.push(QrscannerPage);
  }

  getStatus() {
    this.qrScanner.getStatus().then(function(status) {
      alert("status = " + status);
    });
  }

  qrscanner() {
    this.platform.ready().then(() => {
        // Optionally request the permission early
        this.qrScanner.prepare()
          .then((status: QRScannerStatus) => {

            alert('preparado!');

            if (status.authorized) {
              // camera permission was granted
              alert('authorized');

              // start scanning
              let scanSub = this.qrScanner.scan().subscribe((text: string) => {
                console.log('Scanned something', text);
                alert(text);
                this.qrScanner.hide(); // hide camera preview
                scanSub.unsubscribe(); // stop scanning

                //this.qrScanner.destroy();
              });

              this.qrScanner.resumePreview();

              // show camera preview
              this.qrScanner.show()
                .then((data: QRScannerStatus) => {
                  alert(data.showing);
                }, err => {
                  alert(err);

                });

              // wait for user to scan something, then the observable callback will be called
            }
            else if (status.denied) {
              alert('denied');
              // camera permission was permanently denied
              // you must use QRScanner.openSettings() method to guide the user to the settings page
              // then they can grant the permission from there
            }
            else {
              // permission was denied, but not permanently. You can ask for permission again at a later time.
              alert('else');
            }
          })
      })
      .catch((e: any) => {
        alert('Error is: ' + e);
      });


  }

}
