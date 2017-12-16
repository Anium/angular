import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { NewsComponent } from './news/news.component';

import { NewsService } from './news.service';
import { NewsDetailComponent } from './news-detail/news-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    NewsComponent,
    NewsDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [NewsService],
  bootstrap: [NewsComponent]
})
export class AppModule { }
