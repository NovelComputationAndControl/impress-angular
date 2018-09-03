import {Routes} from '@angular/router';
import {Page404Component} from "./pages/page404/page404.component";
import {IndexPageComponent} from "./pages/index-page/index-page.component";
import {ObjectivesPageComponent} from "./pages/objectives-page/objectives-page.component";
import {ResultsPageComponent} from "./pages/results-page/results-page.component";
import {PublicationsPageComponent} from "./pages/publications-page/publications-page.component";
import {TeamPageComponent} from "./pages/team-page/team-page.component";

export const appRoutes: Routes = [
  {
    path: 'objectives',
    component: ObjectivesPageComponent
  },
  {
    path: 'results',
    component: ResultsPageComponent
  },
  {
    path: 'publications',
    component: PublicationsPageComponent
  },
  {
    path: 'team',
    component: TeamPageComponent
  },
  {
    path: 'index',
    component: IndexPageComponent
  },
  {
    path: '',
    redirectTo: '/index',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: Page404Component
  }
];
