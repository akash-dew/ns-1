import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptCommonModule } from '@nativescript/angular'

import { BrowseRoutingModule } from './browse-routing.module'
import { BrowseComponent } from './browse.component'
import { DropDownModule } from "nativescript-drop-down/angular";
import { TNSCheckBoxModule } from '@nstudio/nativescript-checkbox/angular';

@NgModule({
  imports: [NativeScriptCommonModule, BrowseRoutingModule, DropDownModule, TNSCheckBoxModule],
  declarations: [BrowseComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class BrowseModule {}
