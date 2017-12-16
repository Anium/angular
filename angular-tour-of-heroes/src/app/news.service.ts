import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { NewsEntry } from './news-entry';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class NewsService {
  
  //private hackernewsUrl = 'https://hacker-news.firebaseio.com/v0/'

  constructor(private http: HttpClient) { }

  posts: NewsEntry[] = [];
  
  load():void {
    this.posts.push({id: 1, title: "coucou", url: "http://google.fr", score: 3});
  }
  
}