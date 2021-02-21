import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TextcomponentComponent } from './textcomponent/textcomponent.component';
import { ImagecomponentComponent } from './imagecomponent/imagecomponent.component';
import { EmpInfoComponent } from './emp-info/emp-info.component';
import { FormComponentComponent } from './form-component/form-component.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { WeatherComponent } from './weather/weather.component';
import {
  SocialLoginModule,
  GoogleLoginProvider,
  SocialAuthService,
  SocialAuthServiceConfig,
} from 'angularx-social-login';
import { GoogleLoginButtonComponent } from './google-login-button/google-login-button.component';

import { ThemeModule } from './theme/theme.module';
import { lightTheme } from './theme/theme-light';
import { darkTheme } from './theme/theme-dark';
import { ThemeSliderComponent } from './theme-slider/theme-slider.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ImagePageComponent } from './image-page/image-page.component';

@NgModule({
  declarations: [
    AppComponent,
    TextcomponentComponent,
    ImagecomponentComponent,
    EmpInfoComponent,
    FormComponentComponent,
    NavbarComponent,
    LoginComponent,
    HomeComponent,
    WeatherComponent,
    GoogleLoginButtonComponent,
    ThemeSliderComponent,
    ImagePageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    SocialLoginModule,
    ThemeModule.forRoot({
      themes: [lightTheme, darkTheme],
      active: 'light',
    }),
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [
    SocialAuthService,
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: true,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '1067299457551-l3qrsr51dls4o94tg1fskmpu1ital47a.apps.googleusercontent.com'
            ),
          },
        ],
      } as SocialAuthServiceConfig,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
