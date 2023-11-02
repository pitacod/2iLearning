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
  errorOccured: boolean=false;
  loading:boolean = true;
  


  constructor(private courseService:CourseService){
    this.catList=['developpement','infographie'];
  }
  ngOnInit(): void {
    this.loadCourses();
    
    
    
  }

  ngAfterViewChecked(){
    init_plugins();

  }

  retry() {
    this.loading = true;
    this.errorOccured =false;
    this.loadCourses();

    
  }

  loadCourses(){
    this.courseService.getCourses().subscribe({
      next: (res)=>
      {
       this.listCourses = res as Course[];
      
      },
      error: ()=>
      {
        console.log('erreur connexion');
        this.errorOccured = true;
        this.loading = false;
      },
      complete: ()=>{
        this.loading = false;
      }
      
    });
  }

}
