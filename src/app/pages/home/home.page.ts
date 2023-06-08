import { ApiService } from '../../services/api.service';
import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLinkWithHref } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, RouterLinkWithHref, HttpClientModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomePage {
  constructor(private apiService: ApiService) {
    // this.createData();
    //this.readData();
    // this.updateData();
    // this.deleteData();
  }

  // readData(){
  //   this.apiService.readData().subscribe(data => {
  //     console.log(data);
  // });
}
