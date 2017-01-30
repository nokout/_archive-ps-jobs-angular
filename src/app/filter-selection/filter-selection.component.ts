import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filter-selection',
  templateUrl: './filter-selection.component.html',
  styleUrls: ['./filter-selection.component.css']
})
export class FilterSelectionComponent implements OnInit {
  @Output() onToggle = new EventEmitter<boolean>();

  constructor() { }




  ngOnInit() {
  }

}
