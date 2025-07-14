import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-top-nav', 
  templateUrl: './top-nav.component.html',
  styleUrl: './top-nav.component.css',
  standalone: false 
})
export class TopNavComponent implements OnInit {

  constructor(
    private location: Location  
    ) {}  

  ngOnInit(): void {
   
  }

  homeClicked() {
    this.location.path();
  }

}
