import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  place: string;
  description: any;
  searched: boolean;

  constructor(_title: Title, _meta: Meta, private _http: HttpClient) {
    _title.setTitle('My home page');
    _meta.addTags([
      {
        name: 'author', content: 'Sourav'
      },
      {
        name: 'keywords', content: 'angular 4 tutorial, angular universal, angular seo'
      },
      {
        name: 'description', content: 'This app gives basic understanding about implementation of angular universal to achieve SEO.'
      }
    ]);
  }

  ngOnInit() {
  }

  search() {
    this.searched = true;
    this._http.request('GET', 'https://jsonplaceholder.typicode.com/posts/1').subscribe(
      (data) => {
      if (data.hasOwnProperty('userId')) {
        this.description = data;
      } else {
        this.description = 'Data not found';
      }
    },
    (err) => {
      console.log(err);
      this.description = 'Data not found';
    }
  );
  }
}
