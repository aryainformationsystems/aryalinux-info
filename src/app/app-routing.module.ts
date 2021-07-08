import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { DocsComponent } from './pages/docs/docs.component';
import { DownloadsComponent } from './pages/downloads/downloads.component';
import { FaqsComponent } from './pages/faqs/faqs.component';
import { HelpComponent } from './pages/help/help.component';
import { HistoryComponent } from './pages/history/history.component';
import { HomeComponent } from './pages/home/home.component';
import { ScreenshotsComponent } from './pages/screenshots/screenshots.component';
import { TeamComponent } from './pages/team/team.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'downloads', component: DownloadsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'faqs', component: FaqsComponent },
  { path: 'screenshots', component: ScreenshotsComponent },
  { path: 'team', component: TeamComponent },
  { path: 'history', component: HistoryComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'help', component: HelpComponent },
  { path: 'docs', component: DocsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
