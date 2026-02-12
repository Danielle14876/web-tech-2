import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core'; 
import { Router } from '@angular/router';
import { GetStudent } from '../../models/student.model';
import { StudentsService } from '../../services/students/students.service';

@Component({
  selector: 'app-students',
  standalone: true,
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss'],
  imports: [CommonModule]
})
export class StudentsComponent implements OnInit {
  private readonly studentsService = inject(StudentsService);
  public readonly router = inject(Router);

  public students = signal<GetStudent[]>([]);

  public async ngOnInit(): Promise<void> {
    const students = await this.studentsService.getStudents();
    this.students.set(students);

    
  }


  public goToCreateStudent(): void {
    this.router.navigate(['/create-student']);
  }
  
  public async deleteStudent(studentId: string): Promise<void> {
    try {
      await this.studentsService.deleteStudent(studentId);
      this.students.set(this.students().filter(student => student.id !== studentId));
    } catch (error) {
      console.error(error);
    }
  }
}