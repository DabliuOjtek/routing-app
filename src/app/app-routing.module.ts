import { TrendingGifsComponent } from './trending-gifs/trending-gifs.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SearchGifComponent } from './search-gif/search-gif.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  { path: 'home', component: MainComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'search-gif', component: SearchGifComponent },
  { path: 'trending-gifs', component: TrendingGifsComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
export const routingComponents = [MainComponent, SearchGifComponent, TrendingGifsComponent, PageNotFoundComponent];
