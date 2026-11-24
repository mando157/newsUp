import { CommonModule, UpperCasePipe } from '@angular/common';
import { Component, ElementRef, inject, input, signal, SimpleChanges, viewChild } from '@angular/core';
import { ReversePipe } from '../../pipes/reverse-pipe';
import { NewsService } from '../../services/news-service';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [CommonModule, ReversePipe, FormsModule], //FIXME - Has All Build-in Pipes
  selector: 'app-navbar',
  styleUrl: './navbar.component.scss',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  public newsService = inject(NewsService);

  public mood: any = signal("light");

  // *   Properties   * //

  // REVIEW - ngOnChanges()
  // public name = input<string>('mando');

  // REVIEW - ngOnInit()
  // public users: any[] = [];

  // public myElement = viewChild<ElementRef>('myElement');

  // REVIEW - Pipes
  // public myName = 'mohamed hassan';
  // public today = new Date();
  // public price = 1500;
  // public discount = 0.25;

  // public user = {
  //   name: 'Mohamed',
  //   age: 21,
  //   job: 'Angular Developer'
  // };

  // public courses = ['HTML', 'CSS', 'JavaScript', 'Angular'];

  // *   Methods   * //

  // REVIEW - ngOnChanges()
  // ngOnChanges(changes: SimpleChanges): void {
  //   //* Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
  //   //* Add '${implements OnChanges}' to the class.
  //   console.log(`changes : ${changes} , name = ${this.name()}`);
  // }

  // REVIEW - ngOnInit()
  // async ngOnInit() {
  //   console.log('Component Initialized');

  //   //* Example: Fetch data from API
  //   let response = await fetch("https://jsonplaceholder.typicode.com/users");    

  //   if(!response.ok){
  //     throw new Error(`Error : ${response.status}`);
  //   }

  //   let data = await response.json();

  //   this.users = data;
  // }

  // async ngDoCheck() {
  //   console.log('Change Detection Checked');
  // }

  // ngAfterContentInit() {
  //   console.log('Projected Content Initialized');
  // }

  // ngAfterContentChecked() {
  //   console.log('Projected Content Checked');
  // }

  // ngAfterViewInit() {
  //   console.log(this.myElement()?.nativeElement);
  // }

  // ngAfterViewChecked() {
  //   console.log('Component View Checked');
  // }

  // ngOnDestroy() {
  //   console.log('Component Destroyed');
  // }

  constructor() {
    if (this.mood() === null) {
      this.updataLocalstorage();
    } else {
      this.mood.set(localStorage.getItem("mood"));
      document.body.setAttribute('data-theme', this.mood());
    }
  }

  updataLocalstorage() {
    localStorage.setItem("mood", this.mood());
  }

  toggleTheme() {
    let currentTheme = document.body.getAttribute('data-theme'),
      newTheme = currentTheme === 'light' ? 'dark' : 'light';

    this.mood.set(newTheme);

    this.updataLocalstorage();

    document.body.setAttribute('data-theme', this.mood());

  }

}
