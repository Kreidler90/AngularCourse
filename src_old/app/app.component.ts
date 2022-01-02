import { Component } from '@angular/core';
import { Routes } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ["../../node_modules/bootstrap/dist/css/bootstrap.css"]
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-course';
  loadedFeatue = 'recipe';

  onNavigate(feature: string) {
    this.loadedFeatue = feature;
  }



}

