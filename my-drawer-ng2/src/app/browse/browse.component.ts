import { Component, OnInit } from '@angular/core'
import { RadSideDrawer } from 'nativescript-ui-sidedrawer'
import { Application } from '@nativescript/core'

@Component({
  selector: 'Browse',
  templateUrl: './browse.component.html',
})
export class BrowseComponent implements OnInit {

  listPickerCountries: Array<string> = ["Australia", "Belgium", "Bulgaria", "Canada", "Switzerland",
  "China", "Czech Republic", "Germany", "Spain", "Ethiopia", "Croatia", "Hungary",
  "Italy", "Jamaica", "Romania", "Russia", "United States"];
selectedListPickerIndex: number = 0;
currentDay: number = new Date().getDate();
currentMonth: number = new Date().getMonth() + 1;
currentYear: number = new Date().getFullYear();


  constructor() {
    // Use the component constructor to inject providers.
  }

  ngOnInit(): void {
    // Init your component properties here.
  }

  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>Application.getRootView()
    sideDrawer.showDrawer()
  }
}
