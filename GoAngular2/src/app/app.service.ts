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


    getList(){
        return this._http.get('http://localhost:8899/api/lists')
        .map(res => res.json())
    }

    onSubmit(data){
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        //var body = "City:" + city + "days:" + days
        console.log(data);
        return this._http.post('http://localhost:8899/api/data', data)
                   .map(res => res.json())
    }

}