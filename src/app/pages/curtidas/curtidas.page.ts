import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterLinkWithHref } from '@angular/router';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-curtidas',
  templateUrl: './curtidas.page.html',
  styleUrls: ['./curtidas.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterLinkWithHref, HttpClientModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CurtidasPage implements OnInit {
  public selectedSegment: string ='Colaboração'
  constructor() { }

  ngOnInit() {
  }
  segmentChanged(event: any) {
    console.log(event.target.value);
    this.selectedSegment = event.target.value
  }

}
