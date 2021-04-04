import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PageNotFoundComponent} from './common/page-not-found/page-not-found.component';
import { MoviesComponent} from './pages/movies/movies.component';
import { MoviedetailsComponent} from './pages/moviedetails/moviedetails.component';


const routes: Routes = [  
{path:'',redirectTo:'',pathMatch:'full'},
{path:'movies',component:MoviesComponent},
{path:'movies/1',component:MoviedetailsComponent},
{path:'**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{onSameUrlNavigation : 'reload',enableTracing : false})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

