import { NgModule } from '@angular/core';

import { ImageFallbackDirective } from './image-fallback.directive';

@NgModule({
  declarations: [ImageFallbackDirective],
  exports: [ImageFallbackDirective]
})
export class ImageFallbackModule {}
