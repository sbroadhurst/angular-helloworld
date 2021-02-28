import { NgModule } from '@angular/core';

import { MatDialogModule } from '@angular/material/dialog';
import { MatSliderModule } from '@angular/material/slider';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

import { MatCarouselModule } from '@ngbmodule/material-carousel';

@NgModule({
  exports: [
    MatSliderModule,
    MatCardModule,
    MatDialogModule,
    MatButtonModule,
    MatCarouselModule,
  ],
})
export class MaterialModule {}
