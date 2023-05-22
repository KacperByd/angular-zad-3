import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'formularz';
  imieinazwisko: string = '';
  email: string = 'Proszę podać email';
  produkt: string = '';
  ilosc: number = 0;
  wiadomosc: string = 'Jeśli masz uwagi, wpisz je tu';
  onSubmit() {
    console.log(
      this.imieinazwisko,
      'dziękujemy za zamówienie',
      this.produkt,
      'w ilości',
      this.ilosc,
      'Szczegóły zamówienia zostały wysłane na adres email',
      this.email,
      'Dziękujemy za uwagi:',
      this.wiadomosc
    );
  }
}
