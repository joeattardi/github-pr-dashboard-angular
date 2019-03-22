import { Component } from '@angular/core';

import { faCodeBranch, faSyncAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  faCodeBranch = faCodeBranch;
  faSyncAlt = faSyncAlt;
}
