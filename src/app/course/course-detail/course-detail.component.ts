import { Component, Input, OnInit } from '@angular/core';
import { Course } from 'src/app/model/course';
import { CourseService } from 'src/app/service/course.service';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit {

  @Input() id:any;
  course?:Course;

  constructor(private courseService:CourseService){

  }
  ngOnInit(): void {
    this.courseService.getCourseById(this.id).subscribe({
      next:(res)=>{
        this.course = res;
      }
    })
  }



}
