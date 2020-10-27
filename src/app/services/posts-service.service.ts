import { Injectable } from '@angular/core';
import {Post} from '../post';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class PostsServiceService {
  private url = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  // @ts-ignore
  getPosts(): Observable<Post[]> {
    // @ts-ignore
    return this.httpClient.get(this.url);

  }

}


