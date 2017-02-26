/**
 * Created by Trajan on 27/02/2017.
 */

import { CarouselModule } from '../common/carousel';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CarouselModule
  ],
})
export class HomeModule {

}
