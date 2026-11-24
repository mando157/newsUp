import { DatePipe, SlicePipe } from '@angular/common';
import { Component, inject, input, signal } from '@angular/core';
import { NewsService } from '../../services/news-service';

@Component({
  imports: [SlicePipe, DatePipe],
  selector: 'app-news-card',
  styleUrl: './news-card.scss',
  templateUrl: './news-card.html',
})
export class NewsCard {
  newsInfo = input.required<any>();

  newsService = inject(NewsService);

  constructor() {
    if (localStorage.getItem("saved") == null) {
      let stored = localStorage.getItem('saved');
      this.newsService.saved.set((stored) ? JSON.parse(stored) : []);
    }
  }

  updateLocalstorage() {
    localStorage.setItem("saved", JSON.stringify(this.newsService.saved()));
  }

  savePost(post: any) {
    let current = JSON.parse(localStorage.getItem('saved') ?? "[]"),
      exist = current.some((item: any) => item.url == post.url);

    if (!exist) {
      current.push(post);
    }

    this.newsService.saved.set(current);
    this.updateLocalstorage();
  }

}
