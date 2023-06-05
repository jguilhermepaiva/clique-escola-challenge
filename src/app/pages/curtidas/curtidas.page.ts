import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-curtidas',
  templateUrl: './curtidas.page.html',
  styleUrls: ['./curtidas.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterLinkWithHref]
})
export class CurtidasPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
