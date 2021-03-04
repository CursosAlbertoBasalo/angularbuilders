import { Component, HostListener } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

@Component({
  selector: 'ab-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public promptEvent!: { preventDefault: any; prompt: () => void };
  public updateAvailable!: boolean;

  @HostListener('window:beforeinstallprompt', ['$event'])
  onbeforeinstallprompt(event: { preventDefault: any; prompt: () => void }) {
    event.preventDefault();
    this.promptEvent = event;
  }

  constructor(private swUpdate: SwUpdate) {
    this.swUpdate.available.subscribe((evt) => {
      console.warn('available: ' + evt.available);
      this.updateAvailable = true;
    });
  }

  public reload() {
    this.swUpdate.activateUpdate().then(() => document.location.reload());
  }

  public installPWA() {
    this.promptEvent.prompt();
  }

  public shouldInstall(): boolean {
    return !this.isRunningStandalone() && this.promptEvent !== undefined;
  }

  public isRunningStandalone(): boolean {
    return window.matchMedia('(display-mode: standalone)').matches;
  }
}
