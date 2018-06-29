import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  src: string = '';
  constructor() {
  
  }

  loadImage(src: string) {
    this.src = src;
  }
}
