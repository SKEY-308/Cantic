import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page  implements OnInit{

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

  totalIcome: number = 0

  userName: string = 'ANDY'

  constructor() {}



  getTotal(){
    for (let i = 0; i < this.currentData.length; i++){
      this.totalIcome = this.totalIcome + this.currentData[i].amount
    }
  }

ngOnInit(): void {
  this.getTotal()


}

}
