import { NgModule } from '@angular/core';

import { MatDialogModule } from '@angular/material/dialog';
import { MatSliderModule } from '@angular/material/slider';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  exports: [MatSliderModule, MatCardModule, MatDialogModule, MatButtonModule],
})
export class MaterialModule {}
