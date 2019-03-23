import {
  Directive,
  Input,
  HostListener,
  OnInit,
  ComponentRef,
  ElementRef
} from '@angular/core';
import {
  OverlayRef,
  Overlay,
  OverlayPositionBuilder,
  FlexibleConnectedPositionStrategy
} from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { TooltipComponent } from './tooltip.component';

@Directive({
  selector: '[appTooltip]'
})
export class TooltipDirective implements OnInit {
  private overlayRef: OverlayRef;

  @Input('appTooltip') text = '';

  @Input() theme = 'dark';

  @Input() position = 'above';

  constructor(
    private overlay: Overlay,
    private elementRef: ElementRef,
    private positionBuilder: OverlayPositionBuilder
  ) {}

  ngOnInit(): void {
    const positionStrategy = this.position === 'above' ? this.buildAbovePosition() : this.buildBelowPosition();
    this.overlayRef = this.overlay.create({ positionStrategy });
  }

  private buildAbovePosition(): FlexibleConnectedPositionStrategy {
    return this.positionBuilder
    .flexibleConnectedTo(this.elementRef)
    .withDefaultOffsetY(-5)
    .withPositions([
      {
        originX: 'center',
        originY: 'top',
        overlayX: 'center',
        overlayY: 'bottom'
      }
    ]);
  }

  private buildBelowPosition(): FlexibleConnectedPositionStrategy {
    return this.positionBuilder
      .flexibleConnectedTo(this.elementRef)
      .withDefaultOffsetY(5)
      .withPositions([
        {
          originX: 'center',
          originY: 'bottom',
          overlayX: 'center',
          overlayY: 'top'
        }
      ]);
  }

  @HostListener('mouseenter')
  show(): void {
    const tooltipPortal = new ComponentPortal(TooltipComponent);
    const tooltipRef: ComponentRef<TooltipComponent> = this.overlayRef.attach(
      tooltipPortal
    );

    tooltipRef.instance.text = this.text;
    tooltipRef.instance.theme = this.theme;
  }

  @HostListener('mouseleave')
  hide(): void {
    this.overlayRef.detach();
  }
}
