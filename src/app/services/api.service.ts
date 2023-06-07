


 import { Injectable } from '@angular/core';
 import { HttpClient, HttpHeaders } from '@angular/common/http';

 @Injectable({
   providedIn: 'root'
 })
 export class ApiService {
   private api: string = 'http://157.230.55.217/api/';
   private token: string = '650f67a8367c79cac06409b146bae07d';

   constructor(private http: HttpClient) { }

  //  createData() {
  //    // Lógica para criar dados
  //  }

  //  readData() {
  //   const url = `${this.api}forum/listar-post/`;

  //   // Creation of the authentication header
  //   const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);

  //   return this.http.get(url, { headers });
  // }
  //  updateData() {
  //   //  Lógica para atualizar dados
  //  }

  //  deleteData() {
  //   // Lógica para excluir dados
  //  }
 }
