import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesComponent } from './courses.component';
import { CreateComponent } from './create/create.component';


@NgModule({
  declarations: [
    CoursesComponent,
    CreateComponent
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    FormsModule
  ]
})
export class CoursesModule { }
