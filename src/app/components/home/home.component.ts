import { Component } from '@angular/core';
import { TypeWriiterComponent } from "../type-wriiter/type-wriiter.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-home',
  imports: [TypeWriiterComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
