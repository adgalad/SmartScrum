
import { Component, Input, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-manifest',
  templateUrl: './manifest.page.html',
  styleUrls: ['./manifest.page.scss'],
})




export class ManifestPage  {

    @Input() id: string;


    slidesOpts : any = {}

    constructor(public modalCtrl: ModalController,
                private navParams: NavParams,
                private statusBar: StatusBar) {
        this.statusBar.hide()
        this.slidesOpts = {
          initialSlide : 0
        }
    }


    dismiss() {
        // using the injected ModalController this page
        // can "dismiss" itself and optionally pass back data
        this.statusBar.show();
        this.modalCtrl.dismiss({
          'dismissed': true
        });
    }

}

