import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { ContactComponent } from './contact/contact.component';
import { CourseIndexComponent } from './course/course-index/course-index.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { InstructorIndexComponent } from './instructor/instructor-index/instructor-index.component';
import { InstructorShowComponent } from './instructor/instructor-show/instructor-show.component';
import { CourseDetailComponent } from './course/course-detail/course-detail.component';

export const routes: Routes = [
  {path:'', component: IndexComponent},
  {path:'course',component: CourseIndexComponent},
  {path:'course/:id',component: CourseDetailComponent},
  {path:'contact',component: ContactComponent},
  {path:'instructors', component:InstructorIndexComponent},
  {path:'instructors/:id',component:InstructorShowComponent},
  {path: '**',component:PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
