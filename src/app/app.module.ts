import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerComponent } from './common/banner/banner.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { NewsComponent } from './pages/news/news.component';
import { TrendingComponent } from './pages/trending/trending.component';
import { TrailersComponent } from './pages/trailers/trailers.component';
import { ToppicsComponent } from './pages/toppics/toppics.component';
//import { MoviesModule} from './movies/movies.module';
import { PagesModule} from './pages/pages.module';


@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    HeaderComponent,
    FooterComponent,
    NewsComponent,
    TrendingComponent,
    TrailersComponent,
    ToppicsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
