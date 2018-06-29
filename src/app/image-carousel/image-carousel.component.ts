import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NguCarousel, NguCarouselStore, NguCarouselService } from '@ngu/carousel';



@Component({
  selector: 'app-image-carousel',
  templateUrl: './image-carousel.component.html',
  styleUrls: ['./image-carousel.component.scss']
})
export class ImageCarouselComponent implements OnInit {

  private carouselToken: string;
 
  public carouselTileItems: Array<any>;
  public carouselTile: NguCarousel;

  @Output() loadThisImage: EventEmitter<any> = new EventEmitter();
 
  constructor(private carousel: NguCarouselService) {  }
 
  ngOnInit(){
    this.carouselTileItems = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
 
    this.carouselTile = {
      grid: {xs: 4, sm: 4, md: 5, lg: 5, all: 0},
      slide: 2,
      speed: 400,
      animation: 'lazy',
      point: {
        visible: true,
        pointStyles: `
          .ngucarouselPoint {
            list-style-type: none;
            text-align: center;
            padding: 12px;
            margin: 0;
            white-space: nowrap;
            overflow: auto;
            box-sizing: border-box;
          }
          .ngucarouselPoint li {
            display: inline-block;
            border-radius: 50%;
            border: 2px solid rgba(0, 0, 0, 0.55);
            padding: 4px;
            margin: 0 3px;
            transition-timing-function: cubic-bezier(.17, .67, .83, .67);
            transition: .4s;
          }
          .ngucarouselPoint li.active {
              background: #6b6b6b;
              transform: scale(1.2);
          }
        `
      },
      load: 2,
      touch: true,
      easing: 'ease'
    }
  }
 
  public carouselTileLoad(evt: any) {
    const len = this.carouselTileItems.length
    if (len <= 30) {
      for (let i = len; i < len + 10; i++) {
        this.carouselTileItems.push(i);
      }
    }
  }
 
  initDataFn(key: NguCarouselStore) {
    this.carouselToken = key.token;
  }
 
  resetFn() {
    this.carousel.reset(this.carouselToken);
  }
 
  moveToSlide() {
    this.carousel.moveToSlide(this.carouselToken, 2, false);
  }

  loadImage(event) {
    this.loadThisImage.emit(event.target.src);
  }
}
