import { ApiService } from '../../services/api.service';
import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLinkWithHref } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, RouterLinkWithHref, HttpClientModule, CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomePage {
  titleNoticias: string[] = [];
  guidNoticias: string[] = [];

  constructor(private apiService: ApiService) {
    this.readDataNoticias();
    this.readDataProjetosMaisVistos();
  }

  readDataNoticias() {
    this.apiService.readDataNoticias().subscribe((data: any) => {
      this.titleNoticias = data.map((item: any) => item.title);
      this.guidNoticias = data.map((item: any) => item.guid);
      console.log(this.guidNoticias);
    });
  }
  // redirectToUrl() {
  //   window.location.href = this.guidNoticias[0];
  // }
  readDataProjetosMaisVistos() {
    this.apiService.readDataProjetosMaisVistos().subscribe((data: any) => {
      console.log(data);

    });
  }
}
