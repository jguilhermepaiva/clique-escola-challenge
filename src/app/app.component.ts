import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { register } from 'swiper/element/bundle';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

register();

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [IonicModule, HttpClientModule, CommonModule],
})
export class AppComponent {
  constructor() {}
}
