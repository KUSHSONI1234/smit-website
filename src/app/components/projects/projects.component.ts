import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-projects',
  imports: [FormsModule,CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Room',
      description: 'Developed a fully functional Zoom clone with features for custom meetings, recordings, and various meeting structures.',
      technologies: ['Stream', 'React', 'Shadcn', 'Clerk', 'Tailwind CSS', 'Next JS'],
      bgStyle: 'rgba(255, 255, 255, 0.1)'
    },
    {
      title: 'Unified Backend for YouTube and Twitter',
      description: 'Built a comprehensive backend system integrating features of YouTube and Twitter into a single application.',
      technologies: ['Node.js', 'Express.js', 'MongoDB', 'Firebase', 'Redis', 'GraphQL'],
      bgStyle: 'rgba(255, 255, 255, 0.1)'
    }
  ];

  handleMouseMove(event: MouseEvent, projectTitle: string) {
    const project = this.projects.find(p => p.title === projectTitle);
    if (!project) return;

    const { offsetX, offsetY, currentTarget } = event;
    const { offsetWidth, offsetHeight } = currentTarget as HTMLElement;

    const x = (offsetX / offsetWidth) * 100;
    const y = (offsetY / offsetHeight) * 100;

    project.bgStyle = `radial-gradient(circle at ${x}% ${y}%, rgba(255, 255, 255, 0.3) 10%, rgba(255, 255, 255, 0.05) 40%, rgba(255, 255, 255, 0.1) 60%)`;
  }

  handleMouseLeave(projectTitle: string) {
    const project = this.projects.find(p => p.title === projectTitle);
    if (project) {
      project.bgStyle = 'rgba(255, 255, 255, 0.1)'; // Reset effect
    }
  }
}
