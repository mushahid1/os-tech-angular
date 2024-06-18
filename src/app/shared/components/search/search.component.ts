import { Component, EventEmitter, Output } from '@angular/core';
import { Subject, debounceTime, distinctUntilChanged, switchMap } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  searchText$ = new Subject<any>();
  @Output() searchEvent = new EventEmitter<any>();

  ngOnInit() {
    this.searchText$
      .pipe(
        debounceTime(300),
        distinctUntilChanged()
      )
      .subscribe((searchText: any) => {
        this.searchEvent.emit(searchText.target.value);
      });
  }

  onSearch(searchText: Event): void {
    this.searchText$.next(searchText);
  }

}
