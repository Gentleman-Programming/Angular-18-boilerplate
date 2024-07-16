import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainContainerComponent } from '../components';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MainContainerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
