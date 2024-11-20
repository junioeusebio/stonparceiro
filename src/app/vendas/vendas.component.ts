import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IWebData } from '../google-tag-manager/google-analytics.interface';

@Component({
  selector: 'app-vendas',
  templateUrl: './vendas.component.html',
  styleUrls: ['./vendas.component.scss'],
})
export class VendasComponent implements OnInit {
  close = true;
  loading = false;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.verifyURL();
  }

  verifyURL() {
    let param = '';
    this.route.params.subscribe((params) => (param = params['cupom']));
    if (!param) {
      this.route.queryParams.subscribe((params) => {
        param = params['cupom'] || '';
      });
    }
    console.log(param);
    if (
      param === 'blackfriday' ||
      'campanhaton' ||
      'planos' ||
      'tonultra' ||
      'especial'
    ) {
      //this.loading = true;
      this.gtmPush();
    } else {
      setTimeout(() => {
        this.close = false;
      }, 17000);
    }
  }

  gtmPush() {
    const web: IWebData = {
      event: 'pageview',
      event_type: 'pageview',
      page_path: document.location.href,
      page_title: document.title,
    };
    (<any>window).dataLayer.push(web);
    this.loading = false;
  }

  closeModal() {
    this.close = !this.close;
  }

  openLink(modelo: string) {
    switch (modelo) {
      case 't1':
        this.gtmPushPurcase('t1');
        window.open(
          'https://www.ton.com.br/checkout/cart/?referrer=9EC6E894-77E9-4CB7-ABC3-ECAD34207106&userTag=tonpro_tier&productId=TONPRO_TIER_D150&userAnticipation=1'
        );
        break;
      case 't3p':
        this.gtmPushPurcase('t3p');
        window.open(
          'https://www.ton.com.br/checkout/cart/?referrer=9EC6E894-77E9-4CB7-ABC3-ECAD34207106&userTag=tonpro_tier&productId=TONPRO_TIER_SMART_POS&userAnticipation=1'
        );
        break;
      case 't3':
        this.gtmPushPurcase('t3');
        window.open(
          'https://www.ton.com.br/checkout/cart/?referrer=9EC6E894-77E9-4CB7-ABC3-ECAD34207106&userTag=tonpro_tier&productId=TONPRO_TIER_S920&userAnticipation=1'
        );
        break;
      case 't2':
        this.gtmPushPurcase('t2');
        window.open(
          'https://www.ton.com.br/checkout/cart/?referrer=9EC6E894-77E9-4CB7-ABC3-ECAD34207106&userTag=tonpro_tier&productId=TONPRO_TIER_D195&userAnticipation=1'
        );
        break;
      case 'insta':
       // this.gtmPushPurcase('insta');
        window.open('https://www.instagram.com/_stonparceiro');
        break;
      case 'whatsapp':
       // this.gtmPushPurcase('whatsapp');
        window.open('https://wa.me/5511930960173');
        break;
      case 'default':
        this.gtmPushPurcase('default');
        window.open(
          'https://www.ton.com.br/checkout/cart/?referrer=9EC6E894-77E9-4CB7-ABC3-ECAD34207106&userTag=tonpro_tier&productId=TONPRO_TIER_D195&userAnticipation=1'
        );
        break;
      default:
        this.gtmPushPurcase('default');
        window.open(
          'https://www.ton.com.br/catalogo/?referrer=9EC6E894-77E9-4CB7-ABC3-ECAD34207106&utm_medium=invite_share&utm_source=revendedor',
          '_blank'
        );
        break;
    }
  }

  gtmPushPurcase(modelo: string) {
    const web: IWebData = {
      event: 'pageview',
      event_type: 'pageview',
      page_path: document.location.href + '&modelo=' + modelo,
      page_title: document.title,
    };
    (<any>window).dataLayer.push(web);
    this.loading = false;
  }
}
