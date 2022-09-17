import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { SearchResultTileComponent } from './components/search-result-tile/search-result-tile.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    SearchBarComponent,
    SearchResultTileComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    SearchBarComponent,
    SearchResultTileComponent
  ]
})
export class SharedModule { }
