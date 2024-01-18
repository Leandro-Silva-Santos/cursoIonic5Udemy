import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Nagegacao2PageRoutingModule } from './nagegacao2-routing.module';

import { Nagegacao2Page } from './nagegacao2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Nagegacao2PageRoutingModule
  ],
  declarations: [Nagegacao2Page]
})
export class Nagegacao2PageModule {}
