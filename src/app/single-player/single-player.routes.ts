import { provideHttpClient } from '@angular/common/http';
import { Routes } from '@angular/router';

import { ClickComponent } from '../click/click.component';
import { ClickService } from '../click.service';

import { SinglePlayerService } from './single-player.service';

const routes: Routes = [
  {
    path: '',
    component: ClickComponent,
    providers: [
      provideHttpClient(),
      {
        provide: ClickService,
        useClass: SinglePlayerService
      }
    ]
  }
];

export default routes;
