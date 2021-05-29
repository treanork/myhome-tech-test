import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  BrochureComponent,
  GalleryComponent,
  HeaderModule,
  HouseContainerComponent,
  HouseModule
} from './components';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path: '', component: HouseContainerComponent},
      {path: 'gallery', component: GalleryComponent},
      {path: 'brochure', component: BrochureComponent},
    ]),
    HttpClientModule,
    HeaderModule,
    HouseModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
