import { Component, AfterViewInit } from '@angular/core';
import GLightbox from 'glightbox';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements AfterViewInit {
  constructor() {}

  ngAfterViewInit() {
    const lightbox = GLightbox({
      selector: 'glightbox'
    });
  }

}
