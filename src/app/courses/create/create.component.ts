import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    if(form.valid){
      const courseObj = form.value;
      console.log(courseObj.title, courseObj.instructor, courseObj.isAvailable);

      
      
    }
  }


}
