import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import {appRoutes} from './routes';
import { Page404Component } from './pages/page404/page404.component';
import { IndexPageComponent } from './pages/index-page/index-page.component';
import { ObjectivesPageComponent } from './pages/objectives-page/objectives-page.component';
import { ResultsPageComponent } from './pages/results-page/results-page.component';
import { PublicationsPageComponent } from './pages/publications-page/publications-page.component';
import { TeamPageComponent } from './pages/team-page/team-page.component';
import { ContactComponent } from './pages/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    Page404Component,
    IndexPageComponent,
    ObjectivesPageComponent,
    ResultsPageComponent,
    PublicationsPageComponent,
    TeamPageComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
