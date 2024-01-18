import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-nagegacao2',
  templateUrl: './nagegacao2.page.html',
  styleUrls: ['./nagegacao2.page.scss'],
})
export class Nagegacao2Page implements OnInit {

  constructor(private nav : NavController) { }

  ngOnInit() {
  }

  showPageNavegacao1(){
    this.nav.navigateForward("navegacao")
  }
}
