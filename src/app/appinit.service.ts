import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  Router } from '@angular/router';
import { CommonService } from './common.service';
import { SoundLessonViewComponent } from './sound-lesson-view/sound-lesson-view.component';
import { SubjectviewComponent } from './subjectview/subjectview.component';

@Injectable({
  providedIn: 'root'
})
export class AppinitService {

  constructor(private router: Router,private http:HttpClient,private common:CommonService) { }

  init() {
    return new Promise<void>((resolve, reject) => {
      const urlParams = new URLSearchParams(location.search);
      var params;
      if(localStorage.getItem("name") === null){
      for (const [key, value] of urlParams) {
        params=`${value}`;
      }
      this.http.get<any>('https://digitieke.com/html-proto?folder='+params).subscribe(data => {
        this.common.protoData=data;
        this.common.pptData=data.htmlData;
        localStorage.setItem('pptData',JSON.stringify(data.htmlData))
        localStorage.setItem('name',data.folderName)
        this.common.menuList=data.menuList;
        localStorage.setItem('menulist',JSON.stringify(this.common.menuList));
        const routes = this.router.config;
        routes.push({ path:data.folderName, component: SoundLessonViewComponent });
        this.router.resetConfig(routes);
        this.router.navigate(['/',data.folderName]); 
        resolve();
    })

  } else{
    const data=localStorage.getItem("name");
    const routes = this.router.config;
    routes.push({ path:data, component: SoundLessonViewComponent });
    this.router.resetConfig(routes);
    this.router.navigate(['/',data]); 
     resolve();
  }
        // Simple example from an array. In reality, I used the response of
        // a GET. Important thing is that the app will wait for this promise to resolve
        // const newDynamicRoutes = ['bulbasaur','charmander','squirtle']
        // const routes = this.router.config;
        // console.log(routes)


          // routes.push({ path: "subject-View", component: SoundLessonViewComponent });


        // this.router.resetConfig(routes);
        // this.router.navigateByUrl('/subject-View'); 
        // resolve();

    });
  }
}
