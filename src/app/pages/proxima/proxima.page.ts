import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-proxima',
  templateUrl: './proxima.page.html',
  styleUrls: ['./proxima.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterLinkWithHref],


})
export class ProximaPage implements OnInit {
  public isDisplayed: boolean = false;
  constructor() { }
  btnClicked() {

    this.isDisplayed = !this.isDisplayed;
  }
  ngOnInit() {
  }

}
