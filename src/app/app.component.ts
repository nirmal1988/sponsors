import { Component } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
//import { setTimeout } from 'timers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

  animations: [
      trigger(
          'inOutAnimation',
          [
              transition(
                  ':enter',
                  [
                      style({ opacity: 0 }),
                      animate('3s ease-out',
                          style({ opacity: 1 }))
                  ]
              ),
              transition(
                  ':leave',
                  [
                      style({ opacity: 1 }),
                      animate('0s ease-in',
                          style({ opacity: 0 }))
                  ]
              )
          ]
      )
  ]
})
export class AppComponent {
    title = 'angular-material-tabs';
    pageNumber: number = 0;
    pageSize: number = 5;
    _mainLoopTimer: number = 8000;
    _menuId: number = 0;
    prevScrollEle: any;
    scrollInterval: number = 7000; //milliseconds
    doNotScroll: boolean = false;
    _data1 = [{
        menu: 'one', items: [
            { row: 1, content: 'AAAAA AAAAA' },
            { row: 2, content: 'AAAAA AAAAA' },
            { row: 3, content: 'AAAAA AAAAA' },
            { row: 4, content: 'AAAAA AAAAA' },
            { row: 5, content: 'AAAAA AAAAA' },
            { row: 6, content: 'AAAAA AAAAA' },
            { row: 7, content: 'AAAAA AAAAA' },
            { row: 8, content: 'AAAAA AAAAA' },
            { row: 9, content: 'AAAAA AAAAA' },
            { row: 10, content: 'AAAAA AAAAA' },
            { row: 11, content: 'AAAAA AAAAA' },
            { row: 12, content: 'AAAAA AAAAA' },
            { row: 13, content: 'AAAAA AAAAA' },
            { row: 14, content: 'AAAAA AAAAA' },
            { row: 15, content: 'AAAAA AAAAA' },
            { row: 16, content: 'AAAAA AAAAA' },
            { row: 17, content: 'AAAAA AAAAA' },
            { row: 18, content: 'AAAAA AAAAA' },
            { row: 19, content: 'AAAAA AAAAA' },
            { row: 20, content: 'AAAAA AAAAA' },
            { row: 21, content: 'AAAAA AAAAA' },
            { row: 22, content: 'AAAAA AAAAA' },
            { row: 23, content: 'AAAAA AAAAA' },
            { row: 24, content: 'AAAAA AAAAA' },
            { row: 25, content: 'AAAAA AAAAA' },
            { row: 26, content: 'AAAAA AAAAA' },
            { row: 27, content: 'AAAAA AAAAA' },
        ]
    }, {
        menu: 'two', items: [{ row: 1, content: 'AAAAA AAAAA' },
            { row: 2, content: 'AAAAA AAAAA' },
            { row: 3, content: 'AAAAA AAAAA' },
            { row: 4, content: 'AAAAA AAAAA' },
            { row: 5, content: 'AAAAA AAAAA' },
            { row: 6, content: 'AAAAA AAAAA' },
                { row: 7, content: 'AAAAA AAAAA' }
            ]
        }, {
            menu: 'three', items: [{ row: 1, content: 'AAAAA AAAAA' },
                { row: 2, content: 'AAAAA AAAAA' },
                { row: 3, content: 'AAAAA AAAAA' }
            ]
        }];

    _data = [{
        menu: 'Sponsorship Opportunity', items: [
            {
                category: 'Annual Sponsorships', data: [
                    { type: 'All Ravi Sabhas', value: 11001, isCurrency: true },
                    { type: 'All Samaiya', value: 7001, isCurrency: true },
                    { type: 'All Mahila Samaiya', value: 7001, isCurrency: true }
                ]
            },
            {
                category: 'Event Sponsorships', data: [
                    { type: 'Ravi Sabha', value: 351, isCurrency: true },
                    { type: 'Parayan', value: 501, isCurrency: true },
                    { type: 'Thakorji Monthly Thal', value: 501, isCurrency: true }
                ]
            },
            {
                category: 'Samaiya Sponsorships', data: [
                    { type: 'Swaminarayan Jayanti | Ram Navami', value: 701, isCurrency: true },
                    { type: 'Janmashtami', value: 701, isCurrency: true },
                    { type: 'Mahant Swami Maharaj Jayanti', value: 701, isCurrency: true },
                    { type: 'Pramukh Swami Maharaj Jayanti', value: 701, isCurrency: true },
                    { type: 'Other Samaiya', value: 551, isCurrency: true },
                    { type: 'Mahila Samaiya', value: 351, isCurrency: true }
                ]
            },
            {
                category: 'Diwali Samaiya Sponsorships', data: [
                    { type: 'Grand Sponsorship', value: 10001, isCurrency: true },
                    { type: 'Platinum Sponsorship', value: 5001, isCurrency: true },
                    { type: 'Diamond Sponsorship', value: 2501, isCurrency: true },
                    { type: 'Gold Sponsorship', value: 2001, isCurrency: true },
                    { type: 'Silver Sponsorship', value: 1501, isCurrency: true }
                ]
            },
            {
                category: 'Payment Options', data: [
                    { type: 'cash', value: 'payby_cash.png', isPaymentOption: true },
                    { type: 'check', value: 'payby_check.png', isPaymentOption: true },
                    { type: 'card', value: 'payby_card.png', isPaymentOption: true }
                ]
            }
        ]
    },
    {
        menu: 'Annual Ravi Sabha', items: [
            {
                category: 'Annual Ravi Sabha', data: [
                    { type: 'Kailasben B Patel And Family(Lancaster)', value: '' },
                    { type: 'Kaushikbhai & Sangitaben Patel(Waxhaw) <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Nehalbhai & Sonalben Patel', value: '' },
                ]
            }
        ]
    },
    {
        menu: 'Annual Samaiya', items: [
            {
                category: 'Annual Samaiya', data: [
                    { type: 'Atulbhai & Chandrikaben Patel(Charlotte) <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Rajbhai Patel ', value: '' },
                    { type: 'Chandreshbhai & Alpaben Patel(Waxhaw) <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Bholabhai & Shantaben Patel', value: '' },
                    { type: 'Dr.Vasantbhai & Nehalben Patel(Rock Hill)', value: '' },
                    { type: 'Kailasben B Patel And Family(Lancaster)', value: '' },
                    { type: 'Kaushikbhai & Sangitaben Patel(Waxhaw) <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Nehalbhai & Sonalben Patel', value: '' },
                    { type: 'Mahendrabhai & Purnimaben Patel(Fort Mill) <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Suryakantbhai & Meenaben <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Gunvantbhai & Kokilaben <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Nileshbhai & Nimitaben <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Priteshbhai & Toralben', value: '' },
                    { type: 'Nitinbhai & Pravinaben Patel(Monroe) <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Arpanbhai Patel', value: '' }
                ]
            }
        ]
    },
    {
        menu: 'Annual Maha Puja', items: [
            {
                category: 'Annual Maha Puja', data: [
                    { type: 'Ashokbhai & Snehaben Patel(Charlotte)', value: '' },
                    { type: 'Chetanbhai & Diptiben Desai(Matthews)', value: '' },
                    { type: 'Hardikbhai & Zalakben Panchal(Charlotte)', value: '' },
                    { type: 'Mahendrabhai & Purnimaben Patel(Fort Mill)', value: '' },
                    { type: 'Pareshbhai & Sangitaben Sutariya(Charlotte)', value: '' },
                    { type: 'Vipinbhai & Kusumben Patel(Matthews)', value: '' }
                ]
            }
        ]
    },
    {
        menu: 'Sunday Activities Schedule', items: [
            {
                category: 'Sunday Activities Schedule', data: [
                    { type: 'Daily Ārti', value: '7: 30am & 6: 30pm', noBullet: true },
                    { type: 'Bāl Mandal(Boys Aged 5 - 13)', value: 'Gujarāti Class – 3: 00pm | Bāl Sabhā – 4: 30pm', noBullet: true },
                    { type: 'Bālikā Mandal(Girls Aged 5 - 13)', value: 'Gujarāti Class – 3: 00pm | Bālikā Sabhā – 4: 30pm', noBullet: true },
                    { type: 'Kishore–Kishori Mandal(Teenage Boys & Girls Aged 14 - 22)', value: 'Kishore Sabhā – 2: 30pm | Kishori Sabhā – 4: 00pm', noBullet: true },
                    { type: 'Yuvak–Yuvati Mandal(Men & Women Aged 23 - 35)', value: 'Yuvak Sabhā – 3: 00pm | Yuvati Sabhā – 2: 30pm', noBullet: true },
                    { type: 'Sanyukta–Premvati Mandal(Men & Women Aged above 35)', value: 'Sanyukta Sabhā – 4: 00pm | Premvati Sabhā – 3: 00pm', noBullet: true },
                    { type: 'Monthly Punam Māhāpujā & Bi - Monthly Ekādashi Sabhā - 7: 30pm', value: '', noBullet: true }
                ]
            }
        ]
    }
    ];


    constructor() {
        this.scrollInitially();
        console.log(this._data);
        this.changeInterval();
        this.swithchMenu();
        this.startPaging();
    }

    scrollInitially() {
        setTimeout(() => {
            this.animate(document.scrollingElement || document.documentElement, "scrollTop", "", 0, 0, 0, true);
        }, 500);
    }
    
    swithchMenu() {
        setTimeout(() => {
            let selectedMenu: HTMLElement = document.getElementsByClassName('mat-tab-label-active')[0] as HTMLElement;

            console.log(selectedMenu);
            console.log('next---', selectedMenu.nextElementSibling);
            if (selectedMenu.nextElementSibling) {
                

                let scrollFrom = 0;
                if (this.prevScrollEle) scrollFrom = this.prevScrollEle.offsetTop;
                this.scrollInitially();

                this.prevScrollEle = null;

                this.pageNumber = 0;
                this._menuId = this._menuId + 1;
                this.changeInterval();

                this.doNotScroll = true;
                setTimeout(() => {
                    this.doNotScroll = false;
                }, (this.scrollInterval - 2000));
                let nextEle: HTMLElement = selectedMenu.nextElementSibling as HTMLElement;
                nextEle.click();
            }
            else {
                console.log('reload');
                window.location.reload();
            }
            this.swithchMenu();
        }, this.mainLoopTimer());
    }


    startPaging() {
        setTimeout(() => {
            
            this.pageNumber = this.pageNumber + 1;
            console.log('this.pageNumber', this.pageNumber)

            let scrollFrom = 0;
            if (this.prevScrollEle) scrollFrom = this.prevScrollEle.offsetTop;

            let nextPage: HTMLElement;
            //nextPage.scrollIntoView({ behavior: 'smooth', block: 'start' });

            //new stuff
            console.log('new stuff');
            let allRows: any = document.getElementsByClassName('cat-det-row') as any;
            console.log('allRows', allRows);
            for (var _ri = 0; _ri < allRows.length; _ri++) {
                if (allRows[_ri].offsetTop > (scrollFrom + 200)) {
                    nextPage = allRows[_ri];
                    console.log('next ele changed', nextPage.offsetTop);
                    break;
                }
            }
            //new stull
            if (this.doNotScroll == false)
                this.prevScrollEle = nextPage;

            if (nextPage && nextPage.offsetTop)
              this.animate(document.scrollingElement || document.documentElement, "scrollTop", "", scrollFrom, nextPage.offsetTop, 1000, true);

            this.startPaging();
        }, this.scrollInterval);
    }

    mainLoopTimer() {
        return this._mainLoopTimer;
    }
    changeInterval() {
        let itemsCount: number = 0;
        this._data[this._menuId].items.forEach((_cat) => {
            itemsCount += _cat.data.length;
        });

        if (itemsCount < 5) itemsCount = 5;
        console.log(itemsCount);
        var newInterval = Math.ceil(itemsCount) * 2000; // double seconds than number of rows
        console.log('newInterval', newInterval);
        this._mainLoopTimer = newInterval;
        console.log('this._data[this._menuId].items.length', this._data[this._menuId].items.length);
        console.log('this._menuId', this._menuId);
        console.log('newInterval', newInterval);
    }

    animate(elem, style, unit, from, to, time, prop) {
        if (this.doNotScroll == true) return;

        if (!elem) {
            return;
        }
        var start = new Date().getTime(),
            timer = setInterval(function () {
                var step = Math.min(1, (new Date().getTime() - start) / time);
                if (prop) {
                    elem[style] = (from + step * (to - from)) + unit;
                } else {
                    elem.style[style] = (from + step * (to - from)) + unit;
                }
                if (step === 1) {
                    clearInterval(timer);
                }
            }, 25);
        if (prop) {
            elem[style] = from + unit;
        } else {
            elem.style[style] = from + unit;
        }
    }

}


