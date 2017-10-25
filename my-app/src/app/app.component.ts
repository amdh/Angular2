import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AppService]
})
export class AppComponent {
  title = 'Welcome, Visitor!';
   server2Status: string;
   server1Status: string;
   moveData: string;
   postData: string;
   server12Status: string;
   server21Status: string;
   public city: string;
   public zipcode: number;
   public days: number;


   constructor (private _httpService: AppService) {}

  getServer2Status(){
    this.server2Status = 'idle waiting for request'
    this._httpService.getServer2Status().
    subscribe(
      data => this.server2Status = JSON.stringify(data),
      error => alert(error),
      () => console.log("finished")
    );
  }

  getServer12Status(){
    this.server12Status = 'idle waiting for request'
    this._httpService.getServer12Status().
    subscribe(
      data => this.server12Status = JSON.stringify(data),
      error => alert(error),
      () => console.log("finished")
    );
  }

  getServer21Status(){
    this.server21Status = 'idle waiting for request'
    this._httpService.getServer21Status().
    subscribe(
      data => this.server21Status = JSON.stringify(data),
      error => alert(error),
      () => console.log("finished")
    );
  }

  getServer1Status(){
    console.log("inside getserver1")

   this._httpService.getServer1Status().
    subscribe(
      data => this.server1Status = JSON.stringify(data),
      error => alert(error),
      () => console.log("finished")
    );
  }

  post(){
    this.postData = 'caluated tax is $560'

    this._httpService.post().
    subscribe(
      data => this.postData = JSON.stringify(data),
      error => alert(error),
      () => console.log("finished")
    );
  }

  move(){
    this.moveData = 'moving data to server2....'
    this._httpService.move().
    subscribe(
      data => this.moveData = JSON.stringify(data),
      error => alert(error),
      () => console.log("finished")
    );
  }

  report(){
    console.log(this.zipcode)
  
    this._httpService.report(this.zipcode).
    subscribe(
      data => this.moveData = JSON.stringify(data),
      error => alert(error),
      () => console.log("finished")
    );
  }

  forcast(){
    console.log(this.city)
    this._httpService.forcast(this.city, this.days).
    subscribe(
      data => this.postData = JSON.stringify(data),
      error => alert(error),
      () => console.log("finished")
    );
  }
}
