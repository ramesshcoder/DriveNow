import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header implements AfterViewInit {
  ngAfterViewInit() {
    const hamburger = document.getElementById('hamburger');
    const nav = document.getElementById('nav');

    hamburger?.addEventListener('click', () => {
      nav?.classList.toggle('active');
    });
  }
}