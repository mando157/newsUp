import { Component, inject, input, signal, SimpleChanges } from '@angular/core';
import { NavbarComponent } from './components/navbar.component/navbar.component';
import { NewsService } from './services/news-service';
import { FormsModule } from '@angular/forms';
import { map } from 'rxjs';
import { NewsList } from './components/news-list/news-list';

@Component({
  imports: [NavbarComponent, FormsModule, NewsList],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  // public _name: string = 'mando';
  // public newsService = inject(NewsService);

  // public search = this.newsService.search;

  // public news = this.newsService.news;

  // public news = signal<any[]>([]);

  // async ngOnInit() {
  //   let data = await this.newsService.getNews();
  //   this.news.set(data.articles);
  // }

  // * Observable
  //    ? (next , error , complete) & 
  //    ? (pipe -> to make processing on data by some functions of Rx.js -> (map() , filter() , switchMap() , toArray()))

  // constructor() {
  //   this.newsService.getUsers()
  //     .pipe(map((users: any) => {
  //       return users.map((user: any) => {
  //         return ((user.id > 2) ? user : "");
  //       });
  //     }))
  //     .subscribe({
  //       next: (data) => {
  //         console.log(data);
  //       },

  //       error: (error) => {
  //         console.log(error);
  //       },

  //       complete: () => {
  //         console.log("complete!");
  //       }
  //     })
  // }

}
