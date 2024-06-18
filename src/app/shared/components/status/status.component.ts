import { Component, Input } from '@angular/core';
import { Statuses } from '../../enums/status';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss']
})
export class StatusComponent {
  @Input() status: string;
  @Input() count: string;
  compare = Statuses;
}
