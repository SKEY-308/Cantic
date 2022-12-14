import { Component, OnInit } from '@angular/core';
import { InfiniteScrollCustomEvent, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  slideOpts = {
    initialSlide: 0,
    speed: 400,
    slidesPerView: 1.1,
    spaceBetween: 10,
    centeredSlides: false,
    grid: {
      rows: 2
    }
  };

  currentData: any = [
    {
      id: 1,
      date: new Date(),
      action: true,
      currency: 'BTC-USDT',
      amount: 1200,
      logo: '/assets/bitcoin.jpg',
      buyPrice: 16882,
      actualPrice: 17450,
      traderID: 'D45F7FH6KFH12NF9'
    },
    {
      id: 2,
      date: new Date(),
      action: false,
      currency: 'ETH-USDT',
      amount: 400,
      logo: '/assets/Eth.jpg',
      buyPrice: 1450,
      actualPrice: 1262,
      traderID: 'D45F7FH6KFH12NF9'
    },
    {
      id: 3,
      date: new Date(),
      action: true,
      currency: 'XRP-USDT',
      amount: 347,
      logo: '/assets/xrp.jpg',
      buyPrice: 0.371,
      actualPrice: 0.321,
      traderID: 'H45F7FH#6KFH1#2NF9'
    },
    {
      id: 4,
      date: new Date(),
      action: false,
      currency: 'XRP-USDT',
      amount: 1000,
      logo: '/assets/xrp.jpg',
      buyPrice: 0.771,
      actualPrice: 0.221,
      traderID: 'H45F7FH#6KFH1#2NF9'
    },
    {
      id: 1,
      date: new Date(),
      action: true,
      currency: 'BTC-USDT',
      amount: 1200,
      logo: '/assets/bitcoin.jpg',
      buyPrice: 16882,
      actualPrice: 17450,
      traderID: 'D45F7FH6KFH12NF9'
    },
    {
      id: 2,
      date: new Date(),
      action: false,
      currency: 'ETH-USDT',
      amount: 400,
      logo: '/assets/Eth.jpg',
      buyPrice: 1450,
      actualPrice: 1262,
      traderID: 'D45F7FH6KFH12NF9'
    },
    {
      id: 3,
      date: new Date(),
      action: true,
      currency: 'XRP-USDT',
      amount: 347,
      logo: '/assets/xrp.jpg',
      buyPrice: 0.371,
      actualPrice: 0.321,
      traderID: 'H45F7FH#6KFH1#2NF9'
    },
    {
      id: 4,
      date: new Date(),
      action: false,
      currency: 'XRP-USDT',
      amount: 1000,
      logo: '/assets/xrp.jpg',
      buyPrice: 0.771,
      actualPrice: 0.221,
      traderID: 'H45F7FH#6KFH1#2NF9'
    },

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
