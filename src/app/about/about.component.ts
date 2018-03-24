import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(_title: Title, _meta: Meta) {
    _title.setTitle('About page');
    _meta.addTags([
      {
        name: 'author', content: 'Sourav'
      },
      {
        name: 'keywords', content: 'angular 4 tutorial, angular universal, angular seo'
      },
      {
        name: 'description', content: 'This app gives basic understanding about implementation of angular universal to achieve SEO. This is description of about page.'
      }
    ]);
  }

  ngOnInit() {
  }

}
