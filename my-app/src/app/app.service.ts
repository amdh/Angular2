import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import 'rxjs/add/operator/map';
import { Headers, RequestOptions } from '@angular/http';

@Injectable()
export class AppService{
    constructor (private _http:Http){}

    getCurrentTime(){
        return this._http.get('http://date.jsontest.com')
        .map(res => res.json())
    }

    getServer12Status(){
        return this._http.get('http://localhost:8080/server2status')
        .map(res => res.json())
    }

    getServer2Status(){
        return this._http.get('http://10.104.102.122:9090/status')
        .map(res => res.json())
    }

    getServer1Status(){
        return this._http.get('http://localhost:8080/status')
        .map(res => res.json())
    }

    move(){
        return this._http.get('http://localhost:8080/move')
        .map(res => res.json())
    }

    post(){
        return this._http.get('http://10.104.98.230:9090/add')
        .map(res => res.json())
    }

    report(zipcode){
        return this._http.get('http://localhost:8080/report/'+zipcode)
        .map(res => res.json())
    }

    forcast(city, days){
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        //var body = "City:" + city + "days:" + days
        let body = new FormData();
        body.append('City', city);
        body.append('days', days);
        console.log(body);
        return this._http.post('http://localhost:8080/forcast', body)
                   .map(res => res.json())
    }

    getServer21Status(){
        return this._http.get('http://localhost:9090/server1status')
        .map(res => res.json())
    }

}