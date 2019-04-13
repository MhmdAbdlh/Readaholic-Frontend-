import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

/** insert the service in the root of the application */
@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  /** create http object in the constructor to use httpClient  */
  constructor( private http: HttpClient ) { }
 /** url of localhost */
  url = 'http://localhost:3000';
   /** http request to get user profile info  */
  getUserprofile(id: number): Observable<any> {
<<<<<<< HEAD
    return this.http.get<any> ('http://972c6e5d.ngrok.io/api/showProfile/'+ id );
=======
    return this.http.get<any> ('http://972c6e5d.ngrok.io/api/showProfile?id='+ id );
>>>>>>> b8e4d8029e95b3e0fe434def682186f1583db578
  }
/** http request to get authenticated user profile info */
  getAuthUserprofile(): Observable<any> {
    return this.http.get<any> ('http://972c6e5d.ngrok.io/api/showProfile');
  }



}
