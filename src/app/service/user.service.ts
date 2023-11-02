import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url:string = 'http://127.0.0.1:8000/api/';

  constructor(private http:HttpClient) { }

  getusers(){
    return this.http.get<User[]>(this.url+'instructors');

  }
  getUserById(id:any){
    return this.http.get<User>(this.url+'instructors/'+id);
  }

}
