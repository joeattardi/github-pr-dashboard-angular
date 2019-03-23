import { Component } from '@angular/core';

import { faBook, faCodeBranch, faSyncAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  faBook = faBook;
  faCodeBranch = faCodeBranch;
  faSyncAlt = faSyncAlt;
}
