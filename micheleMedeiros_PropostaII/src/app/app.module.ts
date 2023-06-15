import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BodyComponent } from './components/body/body.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/header/navbar/navbar.component';
import { AboutComponent } from './components/body/about/about.component';
import { DestinationsComponent } from './components/body/destinations/destinations.component';
import { TestimonyComponent } from './components/body/testimony/testimony.component';
import { AlunosComponent } from './components/alunos/alunos.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    NavbarComponent,
    AboutComponent,
    DestinationsComponent,
    TestimonyComponent,
    AlunosComponent,

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
