import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-documents',
  templateUrl: './main-documents.component.html',
  styleUrls: ['./main-documents.component.css']
})
export class MainDocumentsComponent implements OnInit {
  folders = ['Department','Students','Faculty','Department Activity','Best Practices','Curriculum', 'Teaching Learning'];

  constructor() { }

  ngOnInit(): void {
  }

}
