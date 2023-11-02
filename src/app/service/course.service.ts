import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Course } from '../model/course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private url:string = 'http://127.0.0.1:8000/api/';

  constructor(private http:HttpClient) { }

  getCourses(){
    return this.http.get<Course[]>(this.url+'courses');

  }
  getCourseById(id:any){
    return this.http.get<Course>(this.url+'courses/'+id);
  }




}
