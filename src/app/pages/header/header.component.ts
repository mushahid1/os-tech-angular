import {
  Component
} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  getSearchValue(value: Event) {
    // TODO: Implement search when required
    console.log(value)
  }

}
