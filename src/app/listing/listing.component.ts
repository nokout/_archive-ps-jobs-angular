import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {

  notices = [
    {
      title: 'Business Analyst',
      classification: ['EL2', 'EL1', 'APS6'],
      salary: '$55-75K',
      location: ['here', 'there', 'everywhere']
    },
    {
      title: 'Systems Analyst',
      classification: ['EL2', 'EL1', 'APS6'],
      salary: '$55-75K',
      location: ['here', 'there', 'everywhere']
    },
    {
      title: 'Analyst Programmer',
      classification: ['EL2', 'EL1', 'APS6'],
      salary: '$55-75K',
      location: ['here', 'there', 'everywhere']
    }

  ]

  constructor() { }

  ngOnInit() {
  }

}
