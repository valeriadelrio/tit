import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';

// Routes
import { APP_ROUTING } from './app.routes';

// Social Network
// import { TwitterService } from 'ng2-twitter';
import { FacebookModule } from 'ngx-facebook';

// Parallax
import { Parallax, ParallaxConfig } from 'ngx-parallax';

// Scroll
import { ScrollToModule } from 'ng2-scroll-to-el';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ContactComponent,
    NosotrosComponent,
    Parallax
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    FacebookModule.forRoot(),
    ScrollToModule.forRoot()
  ],
  providers: [
    // TwitterService,
    FacebookModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
