import { Component, Input } from '@angular/core';
export interface PageData {
  title: string;
  description: string;
}
@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss']
})
export class PageHeaderComponent {
  @Input() pageData: PageData;
}
