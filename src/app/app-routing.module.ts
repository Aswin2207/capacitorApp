import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ContainerComponent } from './container/container.component';
import { LessonsComponent } from './lessons/lessons.component';
import { MotionContainerComponent } from './motion-container/motion-container.component';
import { MotionLessionViewComponent } from './motion-lession-view/motion-lession-view.component';
import { SoundContainerComponent } from './sound-container/sound-container.component';
import { SoundLessonViewComponent } from './sound-lesson-view/sound-lesson-view.component';
import { SubjectsComponent } from './subjects/subjects.component';
import { SubjectviewComponent } from './subjectview/subjectview.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'html-proto',
    pathMatch: 'full'
  },
  {
    path: 'subjects',
    component:SubjectsComponent
  },
  {
    path: 'subjectsView',
    component:SubjectviewComponent
  },
  {
    path: 'lesson',
    component:ContainerComponent
  },
  {
    path: 'lesson-view',
    component:LessonsComponent
  },
  {
    path: 'lesson-motion',
    component:MotionContainerComponent
  },
  {
    path: 'lesson-view-motion',
    component:MotionLessionViewComponent
  },
  {
    path: 'lesson-sound',
    component:SoundContainerComponent
  },
  {
    path: 'subject-View',
    component:SoundLessonViewComponent
  },
  {
    path:"html-proto",
    component:TestComponent
  }
];

// const routes: Routes = [
//   {
//     path: 'home',
//     loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
//   }
//   ];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules,useHash: true })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
