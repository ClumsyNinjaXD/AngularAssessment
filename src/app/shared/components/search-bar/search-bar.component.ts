import { Component, EventEmitter, OnInit, Output, OnDestroy } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit, OnDestroy {
  @Output() public searchTermChanged: EventEmitter<string> = new EventEmitter();
  public searchTerm: string|undefined = undefined;
  public searchModelChanged: Subject<string> = new Subject<string>();
  private searchModelChangeSubscription: Subscription | undefined;

  constructor() { }

  public ngOnInit(): void {
    this.searchModelChangeSubscription = this.searchModelChanged
      .pipe(
        debounceTime(700),
        distinctUntilChanged()
      )
      .subscribe(newText => {
        this.searchTerm = newText;
        this.updateSearchTerm();
      });
  }

  public updateSearchTerm(): void {
    this.searchTermChanged.emit(this.searchTerm);
  }

  public ngOnDestroy(): void {
    if (this.searchModelChangeSubscription) {
      this.searchModelChangeSubscription.unsubscribe();
    }
  }

}
