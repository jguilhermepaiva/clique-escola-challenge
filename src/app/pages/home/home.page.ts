import { ApiService } from '../../services/api.service';
import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLinkWithHref } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NoticiaService } from '../../noticia.service';



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
  descriptionNoticias: string[] = [];
  noticiaSelecionada: any;
  combinedData: { title: string, noticia: any }[] = []; // Array combinado

  constructor(private apiService: ApiService, private noticiaService: NoticiaService) {
    this.readDataNoticias();
  }

  readDataNoticias() {
    this.apiService.readDataNoticias().subscribe((data: any) => {
      this.titleNoticias = data.map((item: any) => item.title);
      this.descriptionNoticias = data.map((item: any) => item.description);
      this.noticiaSelecionada = data[0];

    });
  }

  selecionarNoticia(noticia: any) {
    this.noticiaService.selecionarNoticia(noticia);
  }

}
