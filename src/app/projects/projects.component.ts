import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  IsShowFianceProject:boolean=false
  isShowRestaurantProject:boolean=false;
  financeCount:number=0;
  ShowProject(data:string){
    debugger
    if(data=="finance"){
      this.IsShowFianceProject=true;
      this.isShowRestaurantProject=false;
    }
    else if(data=="Restaurant"){
      
      this.IsShowFianceProject=false;
      this.isShowRestaurantProject=true;
    }
  }
}
