import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
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
    CourseItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
