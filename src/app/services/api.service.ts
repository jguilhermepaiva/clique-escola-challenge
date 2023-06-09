import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

 @Injectable({
   providedIn: 'root'
 })
 export class ApiService {
   private token: string = '650f67a8367c79cac06409b146bae07d';

   constructor(private http: HttpClient) { }

    createData() {
      // Lógica para criar dados
    }

    readDataNoticias() {
     const url = `/api/noticias/`;

    const headersCreated = new HttpHeaders({'Authorization': this.token});

    return this.http.get(url, {headers:headersCreated});
   }
   readDataProjetosMaisVistos() {
    const url = `/api/projects`;

   const headersCreated = new HttpHeaders({'Authorization': this.token});

   return this.http.get(url, {headers:headersCreated});
  }
    updateData() {
     //  Lógica para atualizar dados
    }

    deleteData() {
     // Lógica para excluir dados
    }
 }


 //const div = document.createElement("div")
