import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesComponent } from "./movies/movies.component";
import { MoviedetailsComponent} from "./moviedetails/moviedetails.component"

const routes: Routes = [
{path:'movies',component:MoviesComponent},
{path:'movies/:id',component:MoviedetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
