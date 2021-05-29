import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BrochureComponent } from './brochure.component';

const routes: Routes = [
    {
      path: '',
      pathMatch: 'full',
      component: BrochureComponent
    }
  ];

@NgModule({
  declarations: [BrochureComponent],
  exports: [BrochureComponent],
  imports: [RouterModule.forChild(routes),]
})
export class BrochureModule {}