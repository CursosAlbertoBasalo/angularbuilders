import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'ab-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public promptEvent!: { preventDefault: any; prompt: () => void };

  @HostListener('window:beforeinstallprompt', ['$event'])
  onbeforeinstallprompt(event: { preventDefault: any; prompt: () => void }) {
    event.preventDefault();
    this.promptEvent = event;
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
