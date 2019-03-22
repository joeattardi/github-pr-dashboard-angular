import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { SpinnerComponent } from './spinner/spinner.component';

@NgModule({
  imports: [CommonModule, FontAwesomeModule],
  declarations: [SpinnerComponent],
  exports: [FontAwesomeModule, SpinnerComponent]
})
export class SharedModule {}
