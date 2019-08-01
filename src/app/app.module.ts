import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ResumeComponent } from './resume/resume.component';
import { NameComponent } from './name/name.component';
import { ExperienceComponent } from './experience/experience.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { BlogComponent } from './blog/blog.component';
import { ProfessionalDetailsComponent } from './professional-details/professional-details.component';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { DescriptionComponent } from './description/description.component';
import { ParticularsComponent } from './particulars/particulars.component';
import { PageTitleComponent } from './page-title/page-title.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutMeComponent,
    ResumeComponent,
    NameComponent,
    ExperienceComponent,
    PortfolioComponent,
    ContactMeComponent,
    BlogComponent,
    ProfessionalDetailsComponent,
    PersonalDetailsComponent,
    DescriptionComponent,
    ParticularsComponent,
    PageTitleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
