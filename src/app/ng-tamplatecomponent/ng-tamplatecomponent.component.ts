import { Component, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { HeadingComponent } from "../reuseableComponent/heading/heading.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ng-tamplatecomponent',
  imports: [HeadingComponent,CommonModule],
  templateUrl: './ng-tamplatecomponent.component.html',
  styleUrl: './ng-tamplatecomponent.component.css'
})
export class NgTamplatecomponentComponent {
  isUserLoggedIn : boolean = false;
  loggedUserName: string = "fahad";

  @ViewChild('dynamicTem') dynamicTemplate : TemplateRef<any> | undefined
  @ViewChild('dynamicContainer',{read:ViewContainerRef}) dynamicContainer: ViewContainerRef | undefined
  loadTemplate(){
   if(this.dynamicTemplate){
this.dynamicContainer?.createEmbeddedView(this.dynamicTemplate)
   }
    
  }
}
