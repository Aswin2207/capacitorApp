import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lessons',
  templateUrl: './lessons.component.html',
  styleUrls: ['./lessons.component.scss'],
})
export class LessonsComponent implements OnInit {
  lessonsList = [
    { id: 1, heading: "Learning Objective" },
    { id: 2, heading: "Introduction" },
    { id: 3, heading: "7.1 Effects of Heat" },
    { id: 4, heading: "7.2 Transfer of Heat" },
    { id: 5, heading: "7.3 Concept of Temprature" },
    { id: 6, heading: "7.4 Specific Heat Capacity" },
    { id: 7, heading: "7.5 Heat Capacity or Thermal Capacity" },
    { id: 8, heading: "7.6 Change Of State" },
    { id: 9, heading: "7.7 Latent Heat" },
    { id: 10, heading: "Excercise" },
    { id: 11, heading: "Concept Map" },
  ];
  transferheaddata = ["Conduction", "Conduction in Daily Life", "Convention", "Convention in Daily Life", "Radiation", "Radiation in Daily Life"]
  Objectives = [
    "Understand the nature and the effects of heat.",
    "Differentiate the conducting powers of various substances.",
    "List out good and bad conductors of heat and their uses.",
    "Explain conduction using kinetic theory.",
    "Describe the experiments to show convection in fluids.",
    "Understand the concept of radiation.",
    "Define specific heat capacity and thermal capacity.",
    "Describe the concept of change of state.",
    "Define specific latent heat of fusion and specific latent heat of vaporization."
  ];
  value: any;
  i = 0;
  currentLesson: any = 1;
  constructor(private router: Router) { }

  ngOnInit() {
    this.currentLesson=1;
   }

  changeView(id) {
    this.currentLesson = id;

  }
  route(id) {
    if (id == 1){
      this.router.navigateByUrl('/lesson')
    }
  }
  prev(){
    if(this.currentLesson!=1){
      this.currentLesson-=1;
    }
  }
  next(){
    if(this.currentLesson!=11){
      this.currentLesson+=1;
    }
  }
  home(){
    window.open("https://digitieke.com/angtieke/#/subjects")
  }
}
