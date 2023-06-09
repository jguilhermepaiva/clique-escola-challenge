import { ApiService } from '../../services/api.service';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterLinkWithHref } from '@angular/router';
import { NoticiaService } from '../../noticia.service';

@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.page.html',
  styleUrls: ['./noticia.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterLinkWithHref]
})
export class NoticiaPage implements OnInit {
  titleNoticias: string[] = [];
  descriptionNoticias: string[] = [];
  noticiaSelecionada: any;
  noticias: string[] = [];

  constructor(private apiService: ApiService, private noticiaService: NoticiaService) {
    this.readDataNoticias();
  }

  readDataNoticias() {
    this.apiService.readDataNoticias().subscribe((data: any) => {
      this.titleNoticias = data.map((item: any) => item.title);
      this.descriptionNoticias = data.map((item: any) => item.description);
      this.noticias = data
      this.noticiaSelecionada = data[0];
    });
  }


 selecionarNoticia(index: number) {
  this.noticiaSelecionada = this.noticias[index];
}

  ngOnInit() {
    this.noticiaService.noticiaSelecionada$.subscribe(noticia => {
      this.noticiaSelecionada = noticia;
    });
  }

}
