import { Routes } from '@angular/router';

import { ClickComponent } from '../click/click.component';
import { ClickService } from '../click.service';

import { OfflineService } from './offline.service';

const routes: Routes = [
  {
    path: '',
    component: ClickComponent,
    providers: [
      {
        provide: ClickService,
        useClass: OfflineService
      }
    ]
  }
];

export default routes;
