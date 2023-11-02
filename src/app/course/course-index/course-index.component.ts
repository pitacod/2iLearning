import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/model/course';
import { CourseService } from 'src/app/service/course.service';
declare function init_plugins():any;

@Component({
  selector: 'app-course-index',
  templateUrl: './course-index.component.html',
  styleUrls: ['./course-index.component.css'],
})
export class CourseIndexComponent implements OnInit {

  catList:string[];

  listCourses?:Course[];
  


  constructor(private courseService:CourseService){
    this.catList=['developpement','infographie'];
  }
  ngOnInit(): void {
    
    this.courseService.getCourses().subscribe({
      next: (res)=>
      {
       this.listCourses = res as Course[];

      },
      error: ()=>
      {
        console.log('erreur connexion');

      },
      
    });
    
  }

  ngAfterViewChecked(){
    init_plugins();

  }

}
