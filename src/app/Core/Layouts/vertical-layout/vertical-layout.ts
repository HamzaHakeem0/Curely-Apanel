import { Component } from '@angular/core';
import { Sidebar } from './sidebar/sidebar';
import { Header } from './header/header';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-vertical-layout',
  imports: [Sidebar,Header,RouterOutlet],
  templateUrl: './vertical-layout.html',
  styleUrl: './vertical-layout.scss',
})
export class VerticalLayout {

}
