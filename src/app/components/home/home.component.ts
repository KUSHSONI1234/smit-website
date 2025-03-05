import { Component } from '@angular/core';
import { TypeWriiterComponent } from "../type-wriiter/type-wriiter.component";

@Component({
  selector: 'app-home',
  imports: [TypeWriiterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
