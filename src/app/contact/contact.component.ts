import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Contact } from '../model/contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  constructor(private http:HttpClient){

  }

  contact:Contact=new Contact();
  showForm:boolean=true;

  onSubmit() {
    this.http.post('http://localhost:8000/api/contact',this.contact).subscribe({
      next: (res)=>{
        this.showForm=false;

      },
      error:(err)=>{
        console.log(err);

      }
    })

  
  }

}
