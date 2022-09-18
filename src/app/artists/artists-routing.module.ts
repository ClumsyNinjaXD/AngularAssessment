import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtistDetailedViewComponent } from './components/artist-detailed-view/artist-detailed-view.component';
import { ArtistSearchComponent } from './components/artist-search/artist-search.component';

const routes: Routes = [
    { path: '', component: ArtistSearchComponent },
    { path: 'details/:id', component: ArtistDetailedViewComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArtistsRoutingModule { }
