import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class HomeServices {
    appUrl = "http://localhost:1337/user";
    constructor( public http:HttpClient){}

   getUsers(): Observable<any>{

        return this.http.get(this.appUrl);

   }

   updateUser(user): Observable<any>{
   
      return this.http.put(this.appUrl+`/${user.id}`, user);
     
   }

}