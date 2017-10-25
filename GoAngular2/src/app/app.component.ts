import { Component } from '@angular/core';
import { AppService } from './app.service';
//import {CORE_DIRECTIVES,FORM_DIRECTIVES} from '@angular/common';
import { Weather} from './weather';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AppService]
})
export class AppComponent {
  title = 'app works!';
  currentTime = '';
  datalist ='';
  public weather = new Weather('NewYork','Sunny',34441,81);

  constructor (private _httpService: AppService) {}

  getCurrentTime(){
   
    this._httpService.getCurrentTime().
    subscribe(
      data => this.currentTime = JSON.stringify(data),
      error => alert(error),
      () => console.log("finished")
    );
  }

  getList(){
    this._httpService.getList().
    subscribe(
      data => this.datalist = JSON.stringify(data),
      error => alert(error),
      () => console.log("finished")
    );
  }

  submitted = false; //form not submited : default
  data: string; //this variable contains our data

  //Show data after form submit and set submitted to true
  onSubmit(data) {
      this.submitted = true;
      this.data = JSON.stringify(data, null, 2);
      console.log(this.data);
      console.log(this.weather);

      this._httpService.onSubmit(this.data).
      subscribe(
        data => this.data = JSON.stringify(data),
        error => alert(error),
        () => console.log("finished")
      );
  }

}
