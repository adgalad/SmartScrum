import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CardPage } from '../card/card.page';
import { StatusBar } from '@ionic-native/status-bar/ngx';




@Component({
  selector: 'app-cards',
  templateUrl: './cards.page.html',
  styleUrls: ['./cards.page.scss'],
})
export class CardsPage implements OnInit {
    public dynamicColor: string

    constructor(private modalController: ModalController, private statusBar: StatusBar) {
      this.dynamicColor = 'dark';
      this.statusBar.show()
      this.statusBar.styleBlackTranslucent();
    }

  ngOnInit() {
  }

  openCard(id) {
    this.presentModal(id)
  }

    async presentModal(id) {
        const modal = await this.modalController.create({
            component: CardPage,
            componentProps: {
                'id': id
            }
        });
        return await modal.present();
    }

}