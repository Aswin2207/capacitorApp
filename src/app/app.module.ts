import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';
import { SubjectsComponent } from './subjects/subjects.component';
import { SubjectviewComponent } from './subjectview/subjectview.component';

@NgModule({
  declarations: [AppComponent,SubjectsComponent,SubjectviewComponent],
  entryComponents: [],
  imports: [BrowserModule,CommonModule, IonicModule.forRoot(), AppRoutingModule, FontAwesomeModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule {}
