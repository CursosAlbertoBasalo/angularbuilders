import { AuthStore } from '@ab/data';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActivateService } from './data/activate.service';
import { Activation } from './models/activation';
import { User } from './models/user';

@Component({
  templateUrl: './activate.page.html',
  styles: [],
})
export class ActivatePage {
  activationData: User;
  constructor(
    route: ActivatedRoute,
    private service: ActivateService,
    private store: AuthStore
  ) {
    this.activationData = route.snapshot.queryParams as User;
  }

  onSend(activationData: Activation) {
    this.service.putActivation$(activationData).subscribe({
      next: (sessionToken) => {
        this.store.setSessionToken(this.activationData.email, sessionToken);
      },
    });
  }
}
