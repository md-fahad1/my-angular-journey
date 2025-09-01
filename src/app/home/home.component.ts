import { Component } from '@angular/core';
import { SidebarComponent } from "../sidebar/sidebar.component";
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../states/app.state';
import { selectCount } from '../states/counter/counter.selector';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet,RouterLink, SidebarComponent,AsyncPipe],  
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
   count$: Observable<number>;
  
    constructor(private store: Store<AppState>) {
      this.count$ = this.store.select(selectCount);
    }

}
