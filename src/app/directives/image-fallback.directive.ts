// import { Directive, ElementRef, HostBinding, HostListener, Input } from "@angular/core";

// @Directive({
//     selector: 'img[imageFallback]',
//     host: {
//         '(error)':'updateUrl()',
//         '(load)': 'load()',
//         '[src]':'src'
//        }
// })
// export class ImageFallbackDirective {
//     @Input() src:string;
//     @Input() imageFallback:string;
//     @HostBinding('class') className: string
  
//     updateUrl() {
//       this.src = this.imageFallback;
//     }
//     load(){
//       this.className = 'image-loaded';
//     }
// }
import { Directive, Input, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: 'img[fallback]'
})
export class ImageFallbackDirective {
  @Input()
  @HostBinding('src')
  src: string;

  @Input() fallback: string;

  @HostListener('error')
  onError() {
    this.src = this.fallback;
  }
}
