import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { WeatherComponent } from './weather/weather.component';
import { ImagePageComponent } from './image-page/image-page.component';
import { FormComponentComponent } from './form-component/form-component.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'form', component: FormComponentComponent },
  { path: 'weather', component: WeatherComponent },
  { path: 'images', component: ImagePageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
