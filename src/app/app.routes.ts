import { Routes } from '@angular/router';
// Import the components
import { StudentsComponent } from './students/students.component';
import { CreateStudentComponent } from './create-student/create-student.component';

export const routes: Routes = [
    { 
        path: 'students', 
        component: StudentsComponent 
    },
    { 
        path: 'create-student', 
        component: CreateStudentComponent 
    },
    // Redirect empty path to students so the app doesn't look blank
    { path: '', redirectTo: 'students', pathMatch: 'full' }
];