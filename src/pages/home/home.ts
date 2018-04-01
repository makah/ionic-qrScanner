import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BarcodeScanner, BarcodeScanResult, BarcodeScannerOptions} from '@ionic-native/barcode-scanner';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  results: BarcodeScanResult;

  constructor(public navCtrl: NavController, private barcode: BarcodeScanner) {

  }
  
  async scanBarcode() {
    
    let options: BarcodeScannerOptions = {
      prompt: 'Hora de scanear!',
      formats : "QR_CODE"
    }
    
    this.results = await this.barcode.scan(options);
  }

}
