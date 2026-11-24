import { Component, computed, effect, inject, linkedSignal, signal } from '@angular/core';
import { NewsCard } from '../news-card/news-card';
import { NewsService } from '../../services/news-service';
import { NgClass } from '@angular/common';
import { Placeholder } from '../placeholder/placeholder';

@Component({
  imports: [NewsCard, NgClass, Placeholder],
  selector: 'app-news-list',
  styleUrl: './news-list.scss',
  templateUrl: './news-list.html',
})
export class NewsList {
  newsService = inject(NewsService);
  newsArticles = linkedSignal(() => this.newsService.news.value().articles ?? []);
  newsTotalResults = linkedSignal(() => this.newsService.news.value().totalResults ?? 0);

  indicators = computed(() => {
    let arr = [];

    for (let i = 1; i <= Math.ceil(this.newsTotalResults() / 8); i++) {
      arr.push({ index: i, page: i });
    }

    return arr;
  });

  public categories: string[] = [
    "general",
    "business",
    "health",
    "science",
    "sports",
    "technology",
    "entertainment"
  ];

  constructor() {
    if (localStorage.getItem("category") === null) {
      localStorage.setItem("category", "general");
      this.newsService.currentCategory.set("general");
    }

    if (localStorage.getItem("page") === null) {
      localStorage.setItem("page", "1");
      this.newsService.currentPage.set(1);
    }
  }

  changePage(pageNumber: number) {
    this.newsService.currentPage.set(pageNumber);
    localStorage.setItem("page", String(this.newsService.currentPage()!));
  }

  next() {
    this.newsService.currentPage.set(this.newsService.currentPage() + 1);
  }
  prev() {
    this.newsService.currentPage.set(this.newsService.currentPage() - 1);
  }

  changeCategory(category: string) {
    this.newsService.currentCategory.set(category);
    this.newsService.currentPage.set(1);

    localStorage.setItem("category", this.newsService.currentCategory()!);
    localStorage.setItem("page", String(this.newsService.currentPage()!));
  }

}
