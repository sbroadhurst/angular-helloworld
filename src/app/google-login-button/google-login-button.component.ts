import { Component, OnInit } from '@angular/core';

import {
  SocialAuthService,
  GoogleLoginProvider,
  SocialUser,
} from 'angularx-social-login';

@Component({
  selector: 'app-google-login-button',
  templateUrl: './google-login-button.component.html',
  styleUrls: ['./google-login-button.component.css'],
})
export class GoogleLoginButtonComponent implements OnInit {
  constructor(private authService: SocialAuthService) {}
  ngOnInit() {}

  signIn() {
    this.authService
      .signIn(GoogleLoginProvider.PROVIDER_ID)
      .then((googleUser) => {
        var profile = {
          authToken: googleUser.authToken,
          email: googleUser.email || '',
          firstName: googleUser.firstName,
          lastName: googleUser.lastName,
          photoUrl: googleUser.photoUrl,
        };
        console.log(profile);
      });
  }

  signOut() {
    this.authService.signOut().then(function () {
      console.log('User signed out.');
    });
  }
}
