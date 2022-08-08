import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

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
@NgModule({
  declarations: [AppComponent,
    SubjectsComponent,
    SubjectviewComponent,
    ContainerComponent,LessonsComponent,
    MotionLessionViewComponent,
    MotionContainerComponent,
    SoundLessonViewComponent,
    SoundContainerComponent],
  entryComponents: [],
  imports: [BrowserModule,CommonModule, IonicModule.forRoot(), AppRoutingModule, FontAwesomeModule,FormsModule,ReactiveFormsModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule {}
