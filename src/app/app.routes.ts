import { Routes } from '@angular/router';
import { HeroeItemComponent } from './heroes/components/heroe-item/heroe-item.component';
import { SearcherComponent } from './heroes/components/searcher/searcher.component';
import { CreateComponent } from './heroes/components/create/create.component';


export const routes: Routes = [ 
    {
        path: '',
        redirectTo: 'heroes-item',
        pathMatch: 'full',
      },
    {
        path: 'heroes-item',
        component: HeroeItemComponent,
      },
      {
        path: 'searcher',
        component: SearcherComponent,
      },
      {
        path: 'create',
        component: CreateComponent,
      }];
