import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routes } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CoursePopularComponent } from './course/course-popular/course-popular.component';
import { CourseCategoryComponent } from './course/course-category/course-category.component';
import { FooterComponent } from './footer/footer.component';
import { IndexComponent } from './index/index.component';
import { ContactComponent } from './contact/contact.component';
import { CourseIndexComponent } from './course/course-index/course-index.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CourseItemComponent } from './course/course-item/course-item.component';
import { FormsModule } from '@angular/forms';
import { InstructorIndexComponent } from './instructor/instructor-index/instructor-index.component';
import { InstructorShowComponent } from './instructor/instructor-show/instructor-show.component';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { CourseDetailComponent } from './course/course-detail/course-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CoursePopularComponent,
    CourseCategoryComponent,
    FooterComponent,
    IndexComponent,
    ContactComponent,
    CourseIndexComponent,
    PageNotFoundComponent,
    CourseItemComponent,
    InstructorIndexComponent,
    InstructorShowComponent,
    CourseDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [
    [provideRouter(routes,withComponentInputBinding())]
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
