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
      this.getVideo(params);
      this.http.get<any>('https://digitieke.com/html-proto/api/getFolder?value='+params).subscribe(data => {
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
    this.getVideo(data);
    // const routes = this.router.config;
    // routes.push({ path:data, component: SoundLessonViewComponent });
    // this.router.resetConfig(routes);
     resolve();
  }
    

    });
  }

  getVideo(params){
    var headers = {
      'Content-Type': 'application/octet-stream',
  };
    this.http.get('https://digitieke.com/html-proto/api/getVideo?value='+params,{ responseType: 'blob'}).subscribe(data => {
      console.log(data);
      var newVideoBlob = new Blob([data], { type: 'video/mp4' })
   this.common.videoUrl= URL.createObjectURL(newVideoBlob);
   console.log(newVideoBlob)
   const route=localStorage.getItem("name");
   const routes = this.router.config;
   routes.push({ path:route, component: SoundLessonViewComponent });
   this.router.resetConfig(routes);
   this.router.navigate(['/',route]); 
  })
  }
}
