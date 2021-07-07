import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { DownloadsComponent } from './pages/downloads/downloads.component';
import { AboutComponent } from './pages/about/about.component';
import { FaqsComponent } from './pages/faqs/faqs.component';
import { AboutNavComponent } from './about-nav/about-nav.component';
import { ScreenshotsComponent } from './pages/screenshots/screenshots.component';
import { TeamComponent } from './pages/team/team.component';
import { HistoryComponent } from './pages/history/history.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    FooterComponent,
    DownloadsComponent,
    AboutComponent,
    FaqsComponent,
    AboutNavComponent,
    ScreenshotsComponent,
    TeamComponent,
    HistoryComponent,
    ContactUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
