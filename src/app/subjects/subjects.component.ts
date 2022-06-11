import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.scss'],
})
export class SubjectsComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {}

  route(id){
    this.router.navigateByUrl('/subjectsView');
    if(id==1)
    localStorage.setItem('subject','Maths');
    else
    localStorage.setItem('subject','Science');
  }

}
