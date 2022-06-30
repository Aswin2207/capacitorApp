import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-motion-lession-view',
  templateUrl: './motion-lession-view.component.html',
  styleUrls: ['./motion-lession-view.component.scss'],
})
export class MotionLessionViewComponent implements OnInit {
  lessonsList = [
    { id: 1, heading: "Learning Objective" },
    { id: 2, heading: "Introduction" },
    { id: 3, heading: "2.1 Rest and Motion" },
    { id: 4, heading: "2.2 Types of Motion" },
    { id: 5, heading: "2.3 Distance and Displacement" },
    { id: 6, heading: "2.4 Speed, Velocity and Acceleration" },
    { id: 7, heading: "2.5 Graphical representation of motion along a straight line" },
    { id: 8, heading: "2.6 Equations of Motion" },
    { id: 9, heading: "2.7 Motion of Freely Falling Body" },
    { id: 10, heading: "2.8 Uniform circular motion" },
    { id: 11, heading: "2.9 Centripetal Acceleration and Centripetal Force" },
    { id: 12, heading: "2.10 Centrifugal Force" },
    { id: 13, heading: "Activities" },
    { id: 14, heading: "Concept Map" },
  ];
  transferheaddata = ["Conduction", "Conduction in Daily Life", "Convention", "Convention in Daily Life", "Radiation", "Radiation in Daily Life"]
  Objectives = [
    "list the objects which are at rest and which are in motion.",
    "understand distance and displacement.",
    "determine the distance covered by an object describing a circular path.",
    "classify uniform motion and non – uniform motion.",
    "distinguish between speed and velocity.",
    "relate accelerated and unaccelerated motion.",
    "deduce the equations of motion of an object from velocity – time graph.",
    "write the equations of motion for a freely falling body.",
    "understand the nature of circular motion.",
    "identify centripetal force and centrifugal force in day to day life."
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
  currentSubLession:any=1;
  videoBoolean:boolean=false;
  constructor(private router: Router) { }

  ngOnInit() {
    this.currentLesson=1;
   }

  changeView(id) {
    this.currentLesson = id;
    this.currentSubLession=1;
       
        setTimeout(() => {
           document.getElementById("lesson-"+this.currentLesson).scrollIntoView();
        }, 100);
     

  }
  route(id) {
    if (id == 1){
      this.router.navigateByUrl('/lesson')
    }
  }
  prev(){
    if(this.videoBoolean){
      this.videoBoolean=false;
    }
    else{
    if(this.currentLesson==4){
      if(this.currentSubLession==1){
        this.currentLesson-=1;
      }
      else if(this.currentSubLession!=1){
        this.currentSubLession-=1;
      }

    }
    else if(this.currentLesson==7){
      this.currentLesson-=1;
      this.currentSubLession=3;
    }
    else if(this.currentLesson==5){
      this.currentLesson-=1;
      this.currentSubLession=2;
    }
    else if(this.currentLesson==6){
      if(this.currentSubLession==1){
        this.currentLesson-=1;
      }
      else if(this.currentSubLession!=1){
        this.currentSubLession-=1;
      }

    }
    else if(this.currentLesson!=1){
      this.currentLesson-=1;
    }
  }
    setTimeout(() => {
      document.getElementById("lesson-"+this.currentLesson).scrollIntoView();
   }, 100);
  }
  next(){
  
    if(this.currentLesson==4){
      if(this.currentSubLession!=2){
        this.currentSubLession+=1;
      }
      else if(this.currentSubLession==2){
        this.currentLesson+=1;
        this.currentSubLession=1;
      }

    }
    else if(this.currentLesson==6){
      // alert(this.currentSubLession)
      if(this.currentSubLession!=3){
        this.currentSubLession+=1;
      }
      else if(this.currentSubLession==3){
        this.currentLesson+=1;
        this.currentSubLession=1;
      }
      // alert(this.currentSubLession)

    }
    else if(this.currentLesson==7){
      // alert(this.currentSubLession)
      if(this.currentSubLession!=7){
        this.currentSubLession+=1;
      }
      else if(this.currentSubLession==7){
        this.currentLesson+=1;
        this.currentSubLession=1;
      }
      // alert(this.currentSubLession)

    }
    else if(this.currentLesson!=14 ){
      this.currentLesson+=1;
    }
    setTimeout(() => {
      document.getElementById("lesson-"+this.currentLesson).scrollIntoView();
   }, 100);

  }
  home(){
    window.open("https://digitieke.com/angtieke/#/subjects")
  }
  nextHeat(){

  }
  videoOpen(){
    this.videoBoolean=true;
  }
}
