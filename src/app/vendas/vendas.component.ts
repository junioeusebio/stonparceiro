import { Component, OnInit } from '@angular/core';
import { IWebData } from '../google-tag-manager/google-analytics.interface';

@Component({
  selector: 'app-vendas',
  templateUrl: './vendas.component.html',
  styleUrls: ['./vendas.component.scss'],
})
export class VendasComponent implements OnInit {
  close = true;
  loading = false;

  ngOnInit(): void {
    this.verifyURL();
  }

  verifyURL() {
    const currentRout = window.location.href;
    if (currentRout.slice(-5) === 'cupom') {
      this.loading = true;
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
   
     this.openLink();
     this.loading = false;
 
  }

  closeModal() {
    this.close = !this.close;
  }

  openLink() {
    window.open(
      'https://www.ton.com.br/catalogo/?referrer=9EC6E894-77E9-4CB7-ABC3-ECAD34207106&utm_medium=invite_share&utm_source=revendedor',
      '_blank'
    );
  }
}
