import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  IsShowFianceProject: boolean = false
  isShowRestaurantProject: boolean = false;
  IsShowAPDSProject:boolean=false;
  IsShowSplitwise:boolean=false;
  financeCount: number = 0;
  Rescount:number=0;
  apdscount:number=0;
  splitcount:number=0;
  ShowProjects(data: string){
    if(data=='finance'){
      if(this.financeCount/2==0){
        this.IsShowFianceProject=true;
        this.financeCount++;
      }
      else{
        this.IsShowFianceProject=false;
        this.financeCount--;
      }
    }
    else if (data == "Restaurant") {
          if(this.Rescount/2==0){
            this.isShowRestaurantProject=true;
            this.Rescount++;
          }else{
            this.isShowRestaurantProject=false;
            this.Rescount--;
          }

    }
    else if(data=="apds"){
      if(this.apdscount/2==0){
        this.IsShowAPDSProject=true;
        this.apdscount++;
      }else{
        this.IsShowAPDSProject=false;
        this.apdscount--;
      }
    }
    else if("split"){
      if(this.splitcount/2==0){
        this.IsShowSplitwise=true;
        this.splitcount++;
      }else{
        this.IsShowSplitwise=false;
        this.splitcount--;
      }
    }
  }
  // ShowProject(data: string) {
  //   debugger
  //   if (data == "finance") {
  //     this.IsShowFianceProject = true;
  //     this.isShowRestaurantProject = false;
  //     this.IsShowAPDSProject=false;
  //   }
  //   else if (data == "Restaurant") {

  //     this.IsShowFianceProject = false;
  //     this.isShowRestaurantProject = true;
  //     this.IsShowAPDSProject=false;
  //   }
  //   else if(data=="apds"){
  //     this.IsShowAPDSProject=true;
  //     this.IsShowFianceProject = false;
  //     this.isShowRestaurantProject = false;
  //   }
  // }

}
