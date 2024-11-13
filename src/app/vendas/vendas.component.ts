import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vendas',
  templateUrl: './vendas.component.html',
  styleUrls: ['./vendas.component.scss'],
})
export class VendasComponent implements OnInit {
  close = true;

  ngOnInit(): void {
    setTimeout(() => {
      this.close = false;
    }, 17000);
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
