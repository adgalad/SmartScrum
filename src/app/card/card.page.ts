
import { Component, Input, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-card',
  templateUrl: './card.page.html',
  styleUrls: ['./card.page.scss'],
})




export class CardPage  implements OnInit {

    @Input() id: string;

    position : any = {
      "0" : 0,
      "1" : 1,
      "3" : 2,
      "5" : 3,
      "8" : 4,
      "13" : 5,
      "21" : 6,
      "34" : 7,
      "55" : 8,
      "89" : 9,
      "114" : 10,
      "infinite" : 11,
      "cafe" : 12,
      "question" : 13
    }

    cards : any = ["0",  "1",  "3",  "5",  "8",  "13",  "21",  "34",  "55",  "89",  "114",  "infinite",  "cafe",  "question",]

    slidesOpts : any = {}

    constructor(public modalCtrl: ModalController,
                private navParams: NavParams,
                private statusBar: StatusBar) {
        this.statusBar.hide()
        this.slidesOpts = {
          pagination: {
            el: '.control-swiper',
          },
          initialSlide : this.position[String(this.navParams.get("id"))]
        }
    }

    ionViewWillEnter(){
       // Set initial slides value.
    }
    ngOnInit() {
      console.log(">>>", this.id)

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


// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute, Router } from '@angular/router';

// @Component({
//   selector: 'app-card',
//   templateUrl: './card.page.html',
//   styleUrls: ['./card.page.scss'],
// })
// export class CardPage implements OnInit {
//   id : any;

//   constructor(private route: ActivatedRoute, private router: Router) {
//     this.route.queryParams.subscribe(params => {
//       if (params && params.id) {
//         this.id = JSON.parse(params.id);
//       }
//     });
//   }

//   ngOnInit() {


//   }

// }
