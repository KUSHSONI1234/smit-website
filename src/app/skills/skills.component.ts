import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  skills = [
    { name: 'C++', icon: 'devicon-cplusplus-plain' },
    { name: 'C', icon: 'devicon-cplusplus-plain' },
    { name: 'HTML', icon: 'devicon-html5-plain' },
    { name: 'CSS', icon: 'devicon-css3-plain' },
    { name: 'JavaScript', icon: 'devicon-javascript-plain' },
    { name: 'Node.js', icon: 'devicon-nodejs-plain' },
    { name: 'React.js', icon: 'devicon-react-original' },
    { name: 'MongoDB', icon: 'devicon-mongodb-plain' },
    { name: 'Express.js', icon: 'devicon-express-original' },
    { name: 'Angular', icon: 'devicon-angular-plain' }
  ];

  visibleSkills = 5;
  isExpanded = false;

  toggleView() {
    this.isExpanded = !this.isExpanded;
    this.visibleSkills = this.isExpanded ? this.skills.length : 5;
  }
}
