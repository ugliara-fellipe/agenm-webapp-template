import { Component } from '@angular/core';
import { ApiService } from './api.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'frontend';
  resultQueryGraphql: any;

  constructor( apiService: ApiService){
    apiService.getData().valueChanges
    .subscribe(({ data }) => {
      console.log(data);
      this.resultQueryGraphql = data.getAllProduct;
    });
  }
}
