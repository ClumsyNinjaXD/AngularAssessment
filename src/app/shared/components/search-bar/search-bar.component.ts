import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {
  @Output() public searchTermChanged: EventEmitter<string> = new EventEmitter();
  public searchTerm: string|undefined = undefined;

  constructor() { }

  public updateSearchTerm(): void {
    this.searchTermChanged.emit(this.searchTerm);
  }
}
