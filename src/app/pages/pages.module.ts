import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { MoviesComponent } from './movies/movies.component';
import { MoviedetailsComponent } from './moviedetails/moviedetails.component';
import { TagsComponent } from './tags/tags.component';
import { PopularComponent } from './popular/popular.component';


@NgModule({
  declarations: [MoviesComponent, MoviedetailsComponent, TagsComponent, PopularComponent],
  imports: [
    CommonModule,
    PagesRoutingModule
  ],
  exports: [TagsComponent,PopularComponent]
})
export class PagesModule { }
