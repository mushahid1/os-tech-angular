import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { config } from '../../constants/config';

interface PageInfo {
  pageIndex: number;
  pageSize: number;
  maxPagesToShow: number;
  pageSizeOptions: number[];
}

@Component({
  selector: 'app-custom-paginator',
  templateUrl: './custom-paginator.component.html',
  styleUrls: ['./custom-paginator.component.scss'],
})
export class CustomPaginatorComponent implements OnInit, OnChanges {
  @Input() pageInfo: PageInfo;
  @Input() length: number;
  @Input() listType: string;
  totalPages: number = 10;
  showedEntries: number;
  @Output() pageChange: EventEmitter<any>;
  pages: any;

  constructor() {
    this.length = 0;
    this.showedEntries = 0;
    this.totalPages = 10;
    this.pageInfo = {
      pageIndex: 0,
      pageSize: config.listPageSize,
      maxPagesToShow: config.maxPagesToShow,
      pageSizeOptions: config.pageSizeOptions,
    };
    this.pageChange = new EventEmitter();
  }

  ngOnInit(): void {
    // TODO: Static values set for now
    // this.totalPages = Math.ceil(this.length / this.pageInfo.pageSize);
    this.generatePages();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['length']) {
      this.length = changes['length'].currentValue;
      if(this.listType !== 'Orders') {
        this.pageInfo = {
          pageIndex: 0,
          pageSize: config.listPageSize,
          maxPagesToShow: config.maxPagesToShow,
          pageSizeOptions: config.pageSizeOptions,
        };
      }
      
      // TODO: Static values set for now
      // this.totalPages = Math.ceil(this.length / this.pageInfo.pageSize);
    }

    this.generatePages();
  }

  generatePages(): void {
    const pages: { index: number; label: string; disabled: boolean }[] = [];
    const currentPage = this.pageInfo.pageIndex + 1;
    const totalPages = this.totalPages;

    if (totalPages <= config.maxPagesToShow) {
      for (let i = 0; i < totalPages; i++) {
        pages.push({ index: i, label: `${i + 1}`, disabled: i === currentPage - 1 });
      }
    } else {
      const delta = Math.floor(config.maxPagesToShow / 2);
      let start = Math.max(currentPage - delta - 1, 0);
      let end = Math.min(currentPage + delta, totalPages - 1);

      if (currentPage <= delta) {
        end += delta - currentPage + 1;
      } else if (currentPage >= totalPages - delta) {
        start -= delta - (totalPages - currentPage);
      }

      for (let i = start; i <= end; i++) {
        pages.push({ index: i, label: `${i + 1}`, disabled: i === currentPage - 1 });
      }
    }

    // if ((currentPage === totalPages - 1 || currentPage === totalPages) && totalPages > config.maxPagesToShow) {
    //   pages.push({ index: totalPages - 1, label: totalPages.toString(), disabled: true });
    // }

    this.pages = pages;
  }

  onPrevious() {
    if (this.pageInfo.pageIndex <= 0) return;
    this.pageInfo.pageIndex -= 1;
    this.generatePages();
    this.pageChange.emit(this.pageInfo);
  }

  onNext() {
    if (this.totalPages === 0 || this.pageInfo.pageIndex + 1 === this.totalPages) return;
    this.pageInfo.pageIndex += 1;
    this.generatePages();
    this.pageChange.emit(this.pageInfo);
  }

  goToPage(pageIndex: number): void {
    this.pageInfo.pageIndex = pageIndex;
    this.generatePages();
    this.pageChange.emit(this.pageInfo);
  }

  onChangePageSize(event: any): void {
    this.pageInfo.pageSize = event.value;
    this.pageInfo.pageIndex = 0;
    this.totalPages = Math.ceil(this.length / this.pageInfo.pageSize);
    this.generatePages();
    this.pageChange.emit(this.pageInfo);
  }
}
