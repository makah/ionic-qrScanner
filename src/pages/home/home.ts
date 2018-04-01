import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BarcodeScanner, BarcodeScannerOptions} from '@ionic-native/barcode-scanner';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  results: String;

  constructor(public navCtrl: NavController, private barcode: BarcodeScanner) {

  }
  
  async scanBarcode() {
    
    let options: BarcodeScannerOptions = {
      prompt: 'Hora de scanear!'
    }
    
    const results = await this.barcode.scan(options);
    console.log(results);
  }

}
