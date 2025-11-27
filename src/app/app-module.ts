import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { FormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenubarModule } from 'primeng/menubar';
import { App } from './app';
import { LayoutModule } from './modules/layout/layout-module';

@NgModule({
  declarations: [
    App,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,CalendarModule,
    BrowserAnimationsModule,
    MenubarModule,
    LayoutModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
 
  ],
  bootstrap: [App]
})
export class AppModule { }
