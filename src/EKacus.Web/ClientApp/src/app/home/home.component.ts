import { Component } from '@angular/core';

interface PromoCard{
  label: string;
  description: string;
  subheader: string;
  price: number | null;
  contactForPrice: boolean;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {

  protected promoCards: PromoCard[] = [
    { label: 'Podstawowy', description: 'Subskrypcja podstawowa to idealny wybór dla tych, którzy chcą korzystać z' +
        ' naszych podstawowych funkcji. Otrzymasz dostęp do naszej platformy, bez reklam i z możliwością korzystania' +
        ' na dowolnym urządzeniu', subheader: 'Idealny dla początkujących placówek',  price: 140, contactForPrice: false},
    { label: 'Rozszerzony', description: 'Subskrypcja rozszerzona to nasza średnia opcja, która oferuje więcej funkcji' +
        ' i dodatkowych korzyści. Dostaniesz dostęp do ekskluzywnych treści, szybszego wsparcia i dostosowanych rekomendacji',
      subheader: 'Idealny dla doświadczonych placówek', price: 450, contactForPrice: false},
    { label: 'Premium', description: 'Subskrypcja premium to nasza najwyższa oferta. Oferuje pełen pakiet funkcji,' +
        ' w tym dostęp do wszystkich treści, ekskluzywnych wydarzeń i priorytetowego wsparcia. Wybierz premium,' +
        ' aby czerpać maksimum z naszej platformy!', subheader: 'Idealny dla tych którzy chcą mieć wszystko pod kontrolą',
      price: null, contactForPrice: true},
  ]
}
