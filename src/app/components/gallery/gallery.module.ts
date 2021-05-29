import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImageFallbackModule } from 'src/app/directives';

import { GalleryComponent } from './gallery.component';

const routes: Routes = [
    {
      path: '',
      pathMatch: 'full',
      component: GalleryComponent
    }
  ];

@NgModule({
  declarations: [GalleryComponent],
  exports: [GalleryComponent],
  imports: [RouterModule.forChild(routes),ImageFallbackModule]
})
export class GalleryModule {}