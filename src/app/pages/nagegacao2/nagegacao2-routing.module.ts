import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Nagegacao2Page } from './nagegacao2.page';

const routes: Routes = [
  {
    path: '',
    component: Nagegacao2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Nagegacao2PageRoutingModule {}
