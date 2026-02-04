import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router'; // 1. Import Router

@Component({
  selector: 'app-create-student',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './create-student.component.html',
  styleUrl: './create-student.component.scss'
})
export class CreateStudentComponent {
  
  // 2. Inject Router in the constructor
  constructor(private router: Router) {}

  // 3. Define the missing goBack function
  goBack() {
    this.router.navigate(['/students']);
  }
}