import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { TitleComponent } from './components/title/title.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BodyComponent } from './components/body/body.component';
import { NewCollectionComponent } from './components/new-collection/new-collection.component';
import { DescriptionComponent } from './components/description/description.component';
import { ProductsComponent } from './components/products/products.component';
import { TopPicksComponent } from './components/top-picks/top-picks.component';
import { SocialMediaComponent } from './components/social-media/social-media.component';
import { AboutComponent } from './components/about/about.component';
import { FoooterComponent } from './components/foooter/foooter.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { CarouselComponent } from './components/carousel/carousel.component';
// pre-browserify.js

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TitleComponent,
    NavbarComponent,
    BodyComponent,
    NewCollectionComponent,
    DescriptionComponent,
    ProductsComponent,
    TopPicksComponent,
    SocialMediaComponent,
    AboutComponent,
    FoooterComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
