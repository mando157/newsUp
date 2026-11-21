import { Component, inject, input, signal, SimpleChanges } from '@angular/core';
import { NavbarComponent } from './components/navbar.component/navbar.component';
import { NewsService } from './services/news-service';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [NavbarComponent, FormsModule],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  // public _name: string = 'mando';
  public newsService = inject(NewsService);

  public search = this.newsService.search;

  public news = this.newsService.news;

  // public news = signal<any[]>([]);

  // async ngOnInit() {
  //   let data = await this.newsService.getNews();
  //   this.news.set(data.articles);
  // }

  
}
