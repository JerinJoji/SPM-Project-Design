import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-active-form',
  templateUrl: './active-form.component.html',
  styleUrls: ['./active-form.component.css']
})
export class ActiveFormComponent implements OnInit {
  folders = ['Department','Students','Faculty','Best Practices','Curriculum', 'Teaching Learning'];
  
  constructor() { }

  ngOnInit(): void {
  }

}
