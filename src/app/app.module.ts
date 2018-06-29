import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NguCarouselModule } from '@ngu/carousel';
import { AppComponent } from './app.component';
import { ImageCarouselComponent } from './image-carousel/image-carousel.component';
import { MainImageComponent } from './main-image/main-image.component';

@NgModule({
  declarations: [
    AppComponent,
    ImageCarouselComponent,
    MainImageComponent
  ],
  entryComponents: [
    AppComponent,
    ImageCarouselComponent
  ],
  imports: [
    BrowserModule,
    NguCarouselModule
  ],
  providers: [
  
  ],
  bootstrap: [
    AppComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }
