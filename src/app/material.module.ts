import { NgModule } from '@angular/core';

import { MatSliderModule } from '@angular/material/slider';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  exports: [MatSliderModule, MatCardModule],
})
export class MaterialModule {}
