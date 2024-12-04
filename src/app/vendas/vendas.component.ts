import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IWebData } from '../google-tag-manager/google-analytics.interface';
import { Sites } from './site.emun';

@Component({
  selector: 'app-vendas',
  templateUrl: './vendas.component.html',
  styleUrls: ['./vendas.component.scss'],
})
export class VendasComponent implements OnInit {
  close = true;
  loading = false;
  manutencao = false;
  imageSrc = 'https://stonparceiro.com.br/assets/images/Ton_Parceiro_Logo_RGB-07.webp';

  constructor(private route: ActivatedRoute) {
    this.manutencao = true;
  }

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
        window.open("//" + Sites.T1, '_blank');
        break;
      case 't3p':
        this.gtmPushPurcase('t3p');
        window.open("//" + Sites.T3P, '_blank');
        break;
      case 't3':
        this.gtmPushPurcase('t3');
        window.open("//" + Sites.T3P, '_blank');
        break;
      case 't2':
        this.gtmPushPurcase('t2');
        window.open("//" + Sites.T2, '_blank');
        break;
      case 'insta':
        this.gtmPushPurcase('insta');
        window.open("//" + Sites.INSTAGRAM, '_blank');
        break;
      case 'whatsapp':
        this.gtmPushPurcase('whatsapp');
        window.open("//" + Sites.WHATSAPP, '_blank');
        break;
      case 'default':
        this.gtmPushPurcase('default');
        window.open("//" + Sites.DEFAULT, '_blank');
        break;
      default:
        this.gtmPushPurcase('default');
        window.open("//" + Sites.DEFAULT, '_blank');
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
