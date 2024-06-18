import { Component, Input } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent {
  @Input() title: string;
  @Input() rows: any[];
  @Input() headers: any[];
  isCollapsed = false;

  toggleCollapse() {
    this.isCollapsed = !this.isCollapsed;
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.rows, event.previousIndex, event.currentIndex);
  }

}
