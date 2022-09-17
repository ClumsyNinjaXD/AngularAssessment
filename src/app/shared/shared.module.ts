import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { SearchResultTileComponent } from './components/search-result-tile/search-result-tile.component';
import { FormsModule } from '@angular/forms';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';



@NgModule({
  declarations: [
    SearchBarComponent,
    SearchResultTileComponent,
    LoadingSpinnerComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    SearchBarComponent,
    SearchResultTileComponent,
    LoadingSpinnerComponent
  ]
})
export class SharedModule { }
