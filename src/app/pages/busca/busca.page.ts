import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-busca',
  templateUrl: './busca.page.html',
  styleUrls: ['./busca.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterLinkWithHref]
})
export class BuscaPage implements OnInit {
  public isDisplayed: boolean = false;
  constructor() { }
  btnClicked() {

    this.isDisplayed = !this.isDisplayed;
  }
  ngOnInit() {
  }

}
