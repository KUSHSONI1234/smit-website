import { Component } from '@angular/core';
import { FooterComponent } from "../components/footer/footer.component";
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms'

@Component({
  selector: 'app-contact',
  imports: [CommonModule, FormsModule, FooterComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  formData = {
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  };

  onSubmit()
  {
    console.log(this.formData)
  }
}
