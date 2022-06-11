import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { HomePageRoutingModule } from './home-routing.module';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    FontAwesomeModule,
    CommonModule
  ],
  declarations: [HomePage],
  providers:[InAppBrowser],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class HomePageModule {}
