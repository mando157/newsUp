import { CommonModule, UpperCasePipe } from '@angular/common';
import { Component, ElementRef, inject, input, SimpleChanges, viewChild } from '@angular/core';
import { ReversePipe } from '../../pipes/reverse-pipe';
import { NewsService } from '../../services/news-service';

@Component({
  imports: [CommonModule , ReversePipe], //FIXME - Has All Build-in Pipes
  selector: 'app-navbar',
  styleUrl: './navbar.component.scss',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  public newsService = inject(NewsService);

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

  public courses = ['HTML', 'CSS', 'JavaScript', 'Angular'];

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
}
