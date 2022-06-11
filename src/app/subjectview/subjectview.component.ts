import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-subjectview',
  templateUrl: './subjectview.component.html',
  styleUrls: ['./subjectview.component.scss'],
})
export class SubjectviewComponent  {
  data: any;
  mathsData = [
    { id: 1, "name": "SET LANGUAGE" },
    { id: 1, "name": "REAL  NUMBERS" },
    { id: 1, "name": "ALGEBRA" },
    { id: 1, "name": "GEOMETRY" },
    { id: 1, "name": "COORDINATE GEOMETRY" },
    { id: 1, "name": "TRIGNOMETRY" },
    { id: 1, "name": "MENSURATION" },
    { id: 1, "name": "STATISTICS" },
    { id: 1, "name": "PROBABILITY" }
  ];
  scienceData = [
    { id: 1, "name": "Measurement" },
    { id: 1, "name": "Motion" },
    { id: 1, "name": "Fluids" },
    { id: 1, "name": "Electric Charge and Electric Current" },
    { id: 1, "name": "Magnetism and Electromagnetism" },
    { id: 1, "name": "Light" },
    { id: 1, "name": "Heat" },
    { id: 1, "name": "Sound" },
    { id: 1, "name": "Universe" },
    { id: 1, "name": "Matter Around Us" },
    { id: 1, "name": "Atomic Structure" },
    { id: 1, "name": "Periodic Classification Of Elements" },
    { id: 1, "name": "Chemical Bonding" },
    { id: 1, "name": "Acids,Base and Salts" },
    { id: 1, "name": "Carbon and its Compounds" },
    { id: 1, "name": "Applied Chemistry" },
    { id: 1, "name": "Animal Kingdom" },
    { id: 1, "name": "Organisation of Tissues" },
    { id: 1, "name": "Plant Physiology" },
    { id: 1, "name": "Organ Systems in Animals" },
    { id: 1, "name": "Nutrition and Health" },
    { id: 1, "name": "World of Microbes" },
    { id: 1, "name": "Economic Biology" },
    { id: 1, "name": "Environmental Science" },
    { id: 1, "name": "Computer – LibreOffice Impress" }
  ];
  math:boolean=false;
  constructor(private router: Router) {
  }

  ionViewWillEnter() {
    if (localStorage.getItem('subject') === 'Maths'){
    this.data = this.mathsData;
    this.math=true;
    }
  else{
    this.data = this.scienceData;
    this.math=false;
  }
}

  route() {
    this.router.navigateByUrl('/subjects');
  }
  ionViewDidLeave(){
   this.data=[];
   localStorage.clear();
  }
}
