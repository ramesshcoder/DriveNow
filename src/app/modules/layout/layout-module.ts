import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Header } from './header/header';
import { Footer } from './footer/footer';
import { LandingPage } from './landing-page/landing-page';
import { Layout } from './layout/layout';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    Header,
    Footer,
    LandingPage,
    Layout
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
  ,
  exports: [
    Layout,
    Header,
    Footer,
    LandingPage
  ]
})
export class LayoutModule { }
