import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-professional-details',
  templateUrl: './professional-details.component.html',
  styleUrls: ['./professional-details.component.css']
})
export class ProfessionalDetailsComponent implements OnInit {
  ItemTitle = "Professional Details"
  name = "Jia Jun"
  age = "28 years"
  location = "Bukit Mertajam"
  experience = "5years"

  constructor() { }

  ngOnInit() {
  }

}
