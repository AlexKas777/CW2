import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
// import get = Reflect.get;
import {User} from '../models/User';
import {Observable} from 'rxjs';
import {Posts} from '../models/Posts';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(private http: HttpClient) {
  }

  users(): Observable <User[]>{
  return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users');
  }

  postsOfSingleUsers(id): Observable <Posts[]>{
    return this.http.get<Posts[]>(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);
  }


}
