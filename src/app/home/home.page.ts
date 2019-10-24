import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ManifestPage } from '../manifest/manifest.page';
import { StatusBar } from '@ionic-native/status-bar/ngx';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
    public dynamicColor: string


    constructor(private router: Router,
                private modalController: ModalController,
                private statusBar: StatusBar) {
      this.dynamicColor = 'dark';
      this.statusBar.styleBlackTranslucent();
      this.statusBar.show();
    }

    ngOnInit(){
      this.statusBar.styleBlackTranslucent();
    }

    openCards() {
      this.router.navigate(['cards']);
    }

    // openImg(id) {
    //   this.presentModal(id)
    // }

    async openImg(id) {
        const modal = await this.modalController.create({
            component: ManifestPage,
            componentProps: {
              'id': id
            }
        });
        return await modal.present();
    }
}

