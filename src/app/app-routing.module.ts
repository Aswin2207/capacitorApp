import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ContainerComponent } from './container/container.component';
import { LessonsComponent } from './lessons/lessons.component';
import { SubjectsComponent } from './subjects/subjects.component';
import { SubjectviewComponent } from './subjectview/subjectview.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'lesson',
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
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules,useHash:true })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
