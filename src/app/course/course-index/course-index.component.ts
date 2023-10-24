import { Component } from '@angular/core';
import { Course } from 'src/app/model/course';

@Component({
  selector: 'app-course-index',
  templateUrl: './course-index.component.html',
  styleUrls: ['./course-index.component.css'],
})
export class CourseIndexComponent {
  catList: string[] = [
    'IT & Software',
    ' Development',
    '  Design',
    ' Business',
    ' Photography',
    ' Marketing',
    ' Arts & Music',
  ];
  listCourses:Course[]=[
    {id:1,title:'titre1',price:2.3,image:'/assets/images/1.jpg',rate:2.3,
    instructor:{
      id:1,name:'bilel',email:"bilel@gmail.com"
    }
  },
    {id:2,title:'titre2',price:4,image:'/assets/images/2.jpg',rate:2.3,
    instructor:{
      id:1,name:'bilel',email:"bilel@gmail.com"
    }
  },
    {id:3,title:'titre3',price:1.3,image:'/assets/images/3.jpg',rate:2.3,
    instructor:{
      id:1,name:'bilel',email:"bilel@gmail.com"
    }
  },
  ]
}
