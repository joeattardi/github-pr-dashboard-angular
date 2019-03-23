import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { SpinnerComponent } from './spinner/spinner.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { TooltipDirective } from './tooltip/tooltip.directive';

@NgModule({
  imports: [CommonModule, FontAwesomeModule, OverlayModule],
  declarations: [SpinnerComponent, TooltipComponent, TooltipDirective],
  exports: [FontAwesomeModule, SpinnerComponent, TooltipDirective],
  entryComponents: [TooltipComponent]
})
export class SharedModule {}
