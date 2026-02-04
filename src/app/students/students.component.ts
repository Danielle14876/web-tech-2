import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { RouterLink } from '@angular/router'; // <--- 1. ADD THIS IMPORT

@Component({
  selector: 'app-students',
  standalone: true, 
  imports: [CommonModule, RouterLink], // <--- 2. ADD RouterLink HERE
  templateUrl: './students.component.html',
  styleUrl: './students.component.scss'
})
export class StudentsComponent {
  students = [
    { name: 'Ernesto Razo, Jr.', course: 'BS Information Technology', year: '3rd Year' },
    { name: 'Haroun Mae', course: 'BS Computer Science', year: '2nd Year' },
    { name: 'Rolan Montebon', course: 'BS Information Systems', year: '4th Year' }
  ];

  deleteStudent(studentName: string) {
    console.log('Delete requested for:', studentName);
  }
}