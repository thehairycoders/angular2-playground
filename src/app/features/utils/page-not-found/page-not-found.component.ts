import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {
 
  images: Array<string> = [
    'bastien.jpg',
    'bayern.jpg',
    'becks.jpg',
    'gazza.jpg',
    // 'jt.jpg',
    // 'mourinho.jpg',
    'ronaldo.jpg'
  ];

  imagePath: string;

  constructor() { }

  ngOnInit() { 

    this.imagePath = this.getRandomImagePath();

  }

  getRandomImagePath(): string {

    let randomImage = this.images[Math.floor(Math.random() * this.images.length)];

    return `/assets/images/404/${randomImage}`;

  }

}
