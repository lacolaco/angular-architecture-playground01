import { Component } from '@angular/core';
import { UserProfileFacade } from './facade/user-profile.facade';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private userProfileFacade: UserProfileFacade) {}

  readonly state$ = this.userProfileFacade.state$;

  getUserProfile() {
    this.userProfileFacade.fetchUserProfile();
  }
}
