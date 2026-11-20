import { Component, input, signal, SimpleChanges } from '@angular/core';
import { NavbarComponent } from './components/navbar.component/navbar.component';

@Component({
  imports: [NavbarComponent],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  public _name: string = 'mando';
}
