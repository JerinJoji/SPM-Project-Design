import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-files',
  templateUrl: './form-files.component.html',
  styleUrls: ['./form-files.component.css']
})
export class FormFilesComponent implements OnInit {
  folders = ['Department','Students','Faculty','Best Practices','Curriculum', 'Teaching Learning'];
  constructor() { }

  ngOnInit(): void {
  }

}
