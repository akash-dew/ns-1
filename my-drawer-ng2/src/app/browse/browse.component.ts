import { Component, Injectable, OnInit } from '@angular/core'
import { ItemEventData } from '@nativescript/core'

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

countries: { name: string, imageSrc: string }[] = [
  { name: "Australia", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/au.png" },
  { name: "Belgium", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/be.png" },
  { name: "Bulgaria", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/bg.png" },
  { name: "Canada", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/ca.png" },
  { name: "Switzerland", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/ch.png" },
  { name: "China", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/cn.png" },
  { name: "Czech Republic", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/cz.png" },
  { name: "Germany", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/de.png" },
  { name: "Spain", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/es.png" },
  { name: "Ethiopia", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/et.png" },
  { name: "Croatia", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/hr.png" },
  { name: "Hungary", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/hu.png" },
  { name: "Italy", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/it.png" },
  { name: "Jamaica", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/jm.png" },
  { name: "Romania", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/ro.png" },
  { name: "Russia", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/ru.png" },
  { name: "United States", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/us.png" },
];

onItemTap(args: ItemEventData): void {
  console.log('Item with index: ' + args.object + ' tapped');
 
  const el = document.querySelector(args.object);
  el.className += ' active';
  console.log(el.className); 
}

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
