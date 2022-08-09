import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-sound-lesson-view',
  templateUrl: './sound-lesson-view.component.html',
  styleUrls: ['./sound-lesson-view.component.scss'],
})
export class SoundLessonViewComponent {
  pptData:any=[];
  lessonsList:any = [
    { id: 1, heading: "Learning Objective" },
    { id: 2, heading: "Introduction" },
    { id: 3, heading: "Production of Sound" },
    { id: 4, heading: "Propagation of Sound Waves" },
    { id: 5, heading: "Characteristics of a Sound Wave    " },
    { id: 6, heading: "Distinguishing different Sounds    " },
    { id: 7, heading: "Speed of Sound" },
    { id: 8, heading: "Reflection of Sound" },
    { id: 9, heading: " Echo" },
    { id: 10, heading: "Reverberation" },
    { id: 11, heading: "Ultrasonic Sound or Ultrasound" },
    { id: 12, heading: "SONAR" },
    { id: 13, heading: "Electrocardiogram (ECG)" },
    { id: 14, heading: "Structure of Human Ear" },
    { id: 15, heading: "Glossary" },
    { id: 16, heading: "Concept Map" },
  ];
  transferheaddata = ["Conduction", "Conduction in Daily Life", "Convention", "Convention in Daily Life", "Radiation", "Radiation in Daily Life"]
  Objectives = [

    "Understand the properties of sound.",

    "Know that sound requires a medium to travel.",

    "Understand that sound waves are longitudinal in nature.",

    "Explain the characteristics of sound.",

    "Gain knowledge about reflection of sound.",

    "Explain ultrasonic sound and understand the applications of ultrasonic sound "
  ];
  Activities = [
    "Listen the motion of birds, animals, vehicles",
    "Observe the speedometer in vehicles",
    "Observe the time interval of sun rise and sun set",
    "Classify the motions happening around you",
    "Try to calculate the time interval and speed for your displacement from home to school for a  month",
  ];
  value: any;
  i = 0;
  currentLesson: any = 1;
  currentSubLession: any = 1;
  videoBoolean: boolean = false;
  htmlContent: any;
  previous:any=1;

  constructor(private router: Router, private sanitize: DomSanitizer,public common:CommonService) { }

  ionViewDidEnter() {

    if(document.getElementById("ppt"))
    document.getElementById("ppt").remove();
    this.lessonsList=JSON.parse(localStorage.getItem('menulist'))
    this.pptData=JSON.parse(localStorage.getItem('pptData'))
    let pptData=JSON.parse(localStorage.getItem('pptData'))
    
    console.log(this.lessonsList)
    console.log(this.pptData)
    this.currentLesson = 1;
    let x = document.getElementById("right-content");
    var html: any = localStorage.getItem('html');
    var parser = new DOMParser();
    var doc = parser.parseFromString(this.pptData[0], 'text/html');
    x.appendChild(doc.body.firstChild)
    let y = document.getElementById("ppt");
    y.style.top = "100px";
    console.log(this.common.pptData)
    // window.location.reload();
  }

  changeView(id) {
    window.location.reload();
    this.videoBoolean = false;
    this.currentLesson = parseInt(id);
    this.currentSubLession = 1;
    // this.currentLesson = 1;
    console.log(this.pptData)
    // alert(this.currentLesson)
    // let prev=document.getElementById("ppt-"+this.previous);
    document.getElementById("ppt").remove();
    let x = document.getElementById("right-content");
    var html: any = this.pptData[this.currentLesson-1];
    var parser = new DOMParser();
    var doc = parser.parseFromString(html, 'text/html');
    x.appendChild(doc.body.firstChild)
    let y = document.getElementById("ppt");
    y.style.top = "100px";
    this.previous=this.currentLesson;
    console.log(this.common.pptData)

    // setTimeout(() => {
    //   document.getElementById("lesson-" + this.currentLesson).scrollIntoView();
    // }, 100);


  }
  route(id) {
    if (id == 1) {
      this.router.navigateByUrl('/lesson-sound');
    }
  }
  prev() {
    this.videoBoolean = false;

    if (this.currentLesson == 4) {
      if (this.currentSubLession == 1) {
        this.currentLesson -= 1;
      }
      else if (this.currentSubLession != 1) {
        this.currentSubLession -= 1;
      }

    }
    else if (this.currentLesson == 5 || this.currentLesson == 6) {
      if (this.currentSubLession == 1) {
        this.currentLesson -= 1;
        this.currentSubLession = 3;
      }
      else if (this.currentSubLession != 1) {
        this.currentSubLession -= 1;
      }

    }
    else if (this.currentLesson == 7) {
      if (this.currentSubLession == 1) {
        this.currentLesson -= 1;
        this.currentSubLession = 3;
      }
      else if (this.currentSubLession != 1) {
        this.currentSubLession -= 1;
      }

    }
    else if (this.currentLesson == 11) {
      if (this.currentSubLession == 1) {
        this.currentLesson -= 1;
        this.currentSubLession = 1;
      }
      else if (this.currentSubLession != 1) {
        this.currentSubLession -= 1;
      }

    }
    else if (this.currentLesson == 8 || this.currentLesson == 12) {
      this.currentLesson -= 1;
      this.currentSubLession = 2;
    }

    else if (this.currentLesson != 1) {
      this.currentLesson -= 1;
    }

    setTimeout(() => {
      document.getElementById("lesson-" + this.currentLesson).scrollIntoView();
    }, 100);
  }
  next() {
    if(this.pptData.length>=this.currentLesson){
   this.currentLesson+=1;
   this.changeView(this.currentLesson);
    }

  }
  home() {
    window.open("https://digitieke.com/angtieke/#/subjects");
  }
  nextHeat() {

  }
  videoOpen() {
    this.videoBoolean = true;
  }
  ngOnInit(): void {
    // window.location.reload();
    if(document.getElementById("ppt"))
    document.getElementById("ppt").remove();
    
  }
}
