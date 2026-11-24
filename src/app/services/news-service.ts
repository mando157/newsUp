import { HttpClient, httpResource } from '@angular/common/http';
import { debounced, effect, inject, Injectable, model, Service, signal } from '@angular/core';
import { Observable } from 'rxjs';

@Service()
// @Injectable({
//     providedIn : "root"
// })
export class NewsService {
    // public search = signal("");

    // private apiLink: string = `https://jsonplaceholder.typicode.com/users`;
    // private apiLink: string = `https://newsapi.org/v2/top-headlines`;

    // public http = inject(HttpClient);

    // async getNews(){
    //     let respond = await fetch(this.apiLink);

    //     if(!respond.ok){
    //         throw new Error(`Error : ${respond.status}`);
    //     }

    //     let data = await respond.json();

    //     console.log(data);

    //     return data;
    // }

    // SECTION - // ^ httpResource() -> signal-based , declarative function that performs an HTTP request through ( HttpClint ) 

    // public searchDebounce = debounced(this.search, 500);

    // public news = httpResource<any>(() => `${this.apiLink}?name_like=${this.searchDebounce.value()}`, { defaultValue: [] });

    // public news = httpResource<any>(() => {
    //     return {
    //         url: this.apiLink,
    //         method: "get",
    //         params: {
    //             "country": "us",
    //             "q" : this.search()
    //         },
    //         headers: {
    //             "X-Api-Key": "c9187ed445b349538b05e30078a6ea04",
    //         }

    //     }
    // },
    //     {
    //         defaultValue: [],
    //         parse: (data: any) => data?.articles ?? []
    //     },
    // );

    // constructor() {
    // effect(() => {
    //     console.log(this.news.value());
    // })

    // this.http.get(`${this.apiLink}`).subscribe((data) => {
    //     console.log(data);
    // })

    // }

    // * Observer

    // getUsers() : Observable<any> {
    //     return this.http.get<any>(this.apiLink);
    // }

    public url = "https://newsapi.org/v2/top-headlines";

    public search = signal("");

    public query = debounced(this.search, 800);

    public currentPage = signal(Number(localStorage.getItem("page")));

    public currentCategory = signal(localStorage.getItem("category"));

    public saved = signal<any[]>([]);

    public news = httpResource<any>(() => {
        return {
            url: this.url,
            params: {
                "country": "us",
                "category": this.currentCategory()!,
                "pageSize": 8,
                "page": this.currentPage()!,
                "q": this.query.value(),
            },
            headers: {
                "X-Api-Key": "ac7fcf60ab354f4c9b3bccb9ca45649e",
            }
        }
    }, {
        defaultValue: [],
    });

}
