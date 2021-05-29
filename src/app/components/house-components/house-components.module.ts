import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { ImageFallbackModule } from 'src/app/directives';
import { HouseContainerComponent } from './house-container';
import { HouseDetailsComponent } from './house-details';




@NgModule({
  declarations: [HouseContainerComponent, HouseDetailsComponent],
  exports: [HouseContainerComponent, HouseDetailsComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    ImageFallbackModule,
    MatIconModule
  ]
})
export class HouseModule {}