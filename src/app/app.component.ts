import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './heroes/components/sidebar/sidebar.component';
import { SearcherComponent } from './heroes/components/searcher/searcher.component';
import { HeroeItemComponent } from './heroes/components/heroe-item/heroe-item.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    SidebarComponent,
    SearcherComponent,
    HeroeItemComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'HeroesApp';
}
