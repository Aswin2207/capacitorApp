import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-motion-container',
  templateUrl: './motion-container.component.html',
  styleUrls: ['./motion-container.component.scss'],
})
export class MotionContainerComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {}
  
  route() {
    this.router.navigateByUrl('/lesson-view-motion');
  }
}