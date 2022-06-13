import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-subjectview',
  templateUrl: './subjectview.component.html',
  styleUrls: ['./subjectview.component.scss'],
})
export class SubjectviewComponent {
  data: any;
  mathsData = [
    { id: 1, "name": "SET LANGUAGE", "part1Data": ["Introduction", "Defintion", "Representation of set"],
    "part2Data": ["Types os set", "Set operations", "Properties of Set Operation"],
   "part3Data":["De-Morgans Law","Application on Cardinality","Of sets"],"path":"https://digitieke.com/Set_Language/artboard-69.html#artboard-69"},
    { id: 2, "name": "REAL  NUMBERS", "part1Data": ["Introduction","Rational Numbers","Irrational numbers"],
    "part2Data": ["Real Numbers", "Radical Notations", "Surds"],
    "part3Data":["Rationalisation","Scientific Notations"] },
    { id: 3, "name": "ALGEBRA", "part1Data": ["Introduction","ABC","DEF"],
    "part2Data": ["ABCD", "EFGH", "IJK"],
    "part3Data":["ABCD","EFGH","IJK"]  },
    { id: 4, "name": "GEOMETRY", "part1Data": ["Angles","Triangles","Congruent Triangles"],
    "part2Data": ["Polygon", "Quadrilateral", "Parallelograms"],
    "part3Data":["Circle"],"path":"https://digitieke.com/Geometry_31Mar/artboard-85.html#artboard-4"  },
    { id: 5, "name": "COORDINATE GEOMETRY", "part1Data": ["Introduction","ABC","DEF"],
    "part2Data": ["ABCD", "EFGH", "IJK"],
    "part3Data":["ABCD","EFGH","IJK"] },
    { id: 6, "name": "TRIGNOMETRY", "part1Data": ["Introduction","ABC","DEF"],
    "part2Data": ["ABCD", "EFGH", "IJK"],
    "part3Data":["ABCD","EFGH","IJK"]},
    { id: 7, "name": "MENSURATION", "part1Data": ["Introduction","ABC","DEF"],
    "part2Data": ["ABCD", "EFGH", "IJK"],
    "part3Data":["ABCD","EFGH","IJK"] },
    { id: 8, "name": "STATISTICS", "part1Data": ["Introduction","ABC","DEF"],
    "part2Data": ["ABCD", "EFGH", "IJK"],
    "part3Data":["ABCD","EFGH","IJK"] },
    { id: 9, "name": "PROBABILITY", "part1Data": ["Introduction","ABC","DEF"],
    "part2Data": ["ABCD", "EFGH", "IJK"],
    "part3Data":["ABCD","EFGH","IJK"] }
  ];
  scienceData = [
    { id: 1, "name": "Measurement","path":"https://digitieke.com/Measurement/artboard-69.html#artboard-69" },
    { id: 1, "name": "Motion" ,"path":"https://digitieke.com/Anim/Finalmotion/ab-1.html#ab-5" },
    { id: 1, "name": "Fluids" ,"path":"https://digitieke.com/Fluids/artboard-69.html#artboard-69" },
    { id: 1, "name": "Electric Charge and Electric Current" },
    { id: 1, "name": "Magnetism and Electromagnetism" },
    { id: 1, "name": "Light" ,"path":"https://digitieke.com/Light/artboard-69.html#artboard-69" },
    { id: 1, "name": "Heat" ,"path":"https://digitieke.com/Heat/artboard-69.html#artboard-69" },
    { id: 1, "name": "Sound" ,"path":"https://digitieke.com/Sound/artboard-69.html#artboard-69"},
    { id: 1, "name": "Universe" ,"path":"https://digitieke.com/Universe/artboard-69.html#artboard-69" },
    { id: 1, "name": "Matter Around Us" ,"path":"https://digitieke.com/Matter_around/artboard-69.html#artboard-69" },
    { id: 1, "name": "Atomic Structure" ,"path":"https://digitieke.com/Atomic_Structure/artboard-69.html#artboard-69" },
    { id: 1, "name": "Periodic Classification Of Elements" ,"path":"https://digitieke.com/Periodic_classification/artboard-69.html#artboard-69"  },
    { id: 1, "name": "Chemical Bonding","path":"https://digitieke.com/Chemical%20_Bonding_31Mar/cb-1.html#cb-5" },
    { id: 1, "name": "Acids,Base and Salts","path":"https://digitieke.com/ACIDS_BASES_AND_SALTS/artboard-69.html#artboard-69" },
    { id: 1, "name": "Carbon and its Compounds","path":"https://digitieke.com/Carbon_Compounds/artboard-69.html#artboard-69" },
    { id: 1, "name": "Applied Chemistry" ,"path":"https://digitieke.com/Applied_Chemistry/artboard-69.html#artboard-69"},
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
  math: boolean = false;
  constructor(private router: Router) {
  }

  ionViewWillEnter() {
    if (localStorage.getItem('subject') === 'Maths') {
      this.data = this.mathsData;
      this.math = true;
    }
    else {
      this.data = this.scienceData;
      this.math = false;
    }
  }

  route() {
    this.router.navigateByUrl('/subjects');
  }
  ionViewDidLeave() {
    this.data = [];
    localStorage.clear();
  }
  subjRoute(path){
    path ? window.open(path) : ''
  }
}
