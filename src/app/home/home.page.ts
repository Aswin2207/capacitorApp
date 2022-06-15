import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
// import { InAppBrowser, InAppBrowserOptions } from '@awesome-cordova-plugins/in-app-browser/ngx';
import { faMagnifyingGlassPlus } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlassMinus } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
// import { ScreenOrientation } from '@awesome-cordova-plugins/screen-orientation/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
 src:any;
 faPlus = faMagnifyingGlassPlus;
 faMinus = faMagnifyingGlassMinus;
 defScale=1.0;
 @ViewChild('container')container:ElementRef
//  options: InAppBrowserOptions= {
//   zoom: 'no',
//   toolbarcolor: 'white',
//   closebuttoncaption:'Close',
//   hideurlbar: 'yes', // hide the url toolbar
//   hidenavigationbuttons: 'yes', // hide navigation buttons back/forward

// }
  constructor(private renderer:Renderer2,private sanitize:DomSanitizer,private router:Router) {
    this.src=this.sanitize.bypassSecurityTrustResourceUrl("https://digitieke.com/Intro-Login/artboard-1.html");
  //  Browser.open({ url: 'http://capacitorjs.com/',windowName:'Tieke', });
  this.launch();
  }
  launch(){
    // const browser=this.iab.create('https://digitieke.com/Intro-Login/artboard-1.html', '_blank', this.options);
  //   browser.on('exit').subscribe(() => {
  //     console.log('browser closed');
  //     App.exitApp();
  // }, err => {
  //     console.error(err);
  // });
  }
  zoomIn(val){
    let value=this.defScale+val;
    this.defScale=value;
    let scale=`scale(${value})`;
    this.renderer.setStyle(this.container.nativeElement,'transform',scale);
  }
  zoomOut(val){
    let value=this.defScale-val;
    this.defScale=value;
    let scale=`scale(${value})`;
    this.renderer.setStyle(this.container.nativeElement,'transform',scale);
  }
  route(){
    this.router.navigateByUrl('/subjects');
  }
}
