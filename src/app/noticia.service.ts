// noticia.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoticiaService {
  private noticiaSelecionadaSource = new BehaviorSubject<any>(null);
  noticiaSelecionada$ = this.noticiaSelecionadaSource.asObservable();

  constructor() { }

  selecionarNoticia(noticia: any) {
    this.noticiaSelecionadaSource.next(noticia);
  }
}
