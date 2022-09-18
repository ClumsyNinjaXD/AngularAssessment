import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchResultTileComponent } from './search-result-tile.component';

describe('SearchResultTileComponent', () => {
  let component: SearchResultTileComponent;
  let fixture: ComponentFixture<SearchResultTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchResultTileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchResultTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('getFormattedFanNumber', () => {
    it('should format the number unit type', () => {
      const result = component.getFormattedFanNumber(1000);

      expect(result).toEqual('1K');
    });

    it('should format the number unit type', () => {
      const result = component.getFormattedFanNumber(1000000);

      expect(result).toEqual('1M');
    });
  });
});
