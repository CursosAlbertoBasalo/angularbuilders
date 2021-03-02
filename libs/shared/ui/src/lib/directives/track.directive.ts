import { Track, TrackerService } from '@ab/data';
import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[abUiTrack]',
})
export class TrackDirective {
  @Input('abUiTrack') param?: string;
  @HostListener('click') onClick() {
    this.trackUserInteraction('click');
  }
  @HostListener('mouseover') onMouseover() {
    this.trackUserInteraction('mouseover');
  }

  constructor(private el: ElementRef, private service: TrackerService) {}

  private trackUserInteraction(action: string) {
    const track: Track = {
      category: 'UserInteraction',
      action: action,
      param: this.getParam(),
    };
    this.service.track(track);
  }
  private getParam() {
    if (this.param) return this.param;
    const native = this.el.nativeElement;
    return (
      native.id || native.name || native.value || native.innerHTML || 'unknown'
    );
  }
}
