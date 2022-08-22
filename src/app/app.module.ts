import { APP_INITIALIZER, CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { Router, RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';
import { SubjectsComponent } from './subjects/subjects.component';
import { SubjectviewComponent } from './subjectview/subjectview.component';
import { ContainerComponent } from './container/container.component';
import { LessonsComponent } from './lessons/lessons.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MotionLessionViewComponent } from './motion-lession-view/motion-lession-view.component';
import { MotionContainerComponent } from './motion-container/motion-container.component';
import { SoundLessonViewComponent } from './sound-lesson-view/sound-lesson-view.component';
import { SoundContainerComponent } from './sound-container/sound-container.component';
import { TestComponent } from './test/test.component';
import { HttpClientModule } from '@angular/common/http';
import { AppinitService } from './appinit.service';


export function initializeApp(appInitService: AppinitService,router:Router) {
  // return (): Promise<any> => { 
  //   return appInitService.init().then(res=>{
  //   });
  // }
}
@NgModule({
  declarations: [AppComponent,
    SubjectsComponent,
    SubjectviewComponent,
    ContainerComponent,LessonsComponent,
    MotionLessionViewComponent,
    MotionContainerComponent,
    SoundLessonViewComponent,
    SoundContainerComponent, TestComponent],
  entryComponents: [],
  imports: [BrowserModule,CommonModule, IonicModule.forRoot(), AppRoutingModule, FontAwesomeModule,FormsModule,ReactiveFormsModule,HttpClientModule],
  providers: [
    // AppinitService,{
  //   provide: APP_INITIALIZER,
  //   useFactory: initializeApp,
  //   multi: true,
  //   deps: [AppinitService]
  // },
  { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule {}
