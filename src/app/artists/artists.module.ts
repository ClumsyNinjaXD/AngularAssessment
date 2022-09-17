import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtistSearchComponent } from './components/artist-search/artist-search.component';
import { ArtistsRoutingModule } from './artists-routing.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    ArtistSearchComponent
  ],
  imports: [
    CommonModule,
    ArtistsRoutingModule,
    SharedModule
  ]
})
export class ArtistsModule { }
