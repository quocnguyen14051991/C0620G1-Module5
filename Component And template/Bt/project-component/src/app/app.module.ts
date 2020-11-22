import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentStudentComponent } from './component-student/component-student.component';
import { CreateStudentComponentComponent } from './create-student-component/create-student-component.component';
import { EditStudentComponentComponent } from './edit-student-component/edit-student-component.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentStudentComponent,
    CreateStudentComponentComponent,
    EditStudentComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
