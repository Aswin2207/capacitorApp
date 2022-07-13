import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sound-container',
  templateUrl: './sound-container.component.html',
  styleUrls: ['./sound-container.component.scss'],
})
export class SoundContainerComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit() {}
  route() {
    this.router.navigateByUrl('/lesson-view-sound');
  }

}
