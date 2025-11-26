import { Component } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  standalone: false,
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.scss',
})
export class LandingPage {
  protected readonly carsList = [
    {
      name: 'BMW 5 Series',
      price: '₹4500/day',
      image:
        'https://images.unsplash.com/photo-1549924231-f129b911e442?auto=format&fit=crop&w=600&q=60',
    },
    {
      name: 'Audi A4',
      price: '₹4000/day',
      image:
        'https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=600&q=60',
    },
    {
      name: 'Hyundai i20',
      price: '₹1500/day',
      image:
        'https://images.unsplash.com/photo-1617814076820-5dcf83f86a2f?auto=format&fit=crop&w=600&q=60',
    },
  ];

  scrollToBooking() {
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
  }
}
