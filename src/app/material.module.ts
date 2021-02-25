import { NgModule } from '@angular/core';

import { MatDialogModule } from '@angular/material/dialog';
import { MatSliderModule } from '@angular/material/slider';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  exports: [MatSliderModule, MatCardModule, MatDialogModule],
})
export class MaterialModule {}
