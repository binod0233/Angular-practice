import { Component, OnInit } from '@angular/core';
import { Course } from '../common/models/course';
const emptyCourse: Course = {
  id: '',
  title: '',
  description: '',
  percentComplete: 0,
  favorite: false,
};

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
})
export class CoursesComponent implements OnInit {
  // 1. Render courses in a list
  // 2. Select a course
  // 3. Render selected course

  courses = [
    {
      id: 1,
      title: 'Angular 13 Fundamentals',
      description: 'Learn the fundamentals of Angular 13',
      percentComplete: 26,
      favorite: true,
    },
    {
      id: 2,
      title: 'JavaScript The HARDEST PARTS EVER!',
      description: 'Learn the JavaScript like a pro! with Will',
      percentComplete: 26,
      favorite: true,
    },
  ];
  selectedCourse = emptyCourse;

  constructor() {}

  ngOnInit(): void {}

  selectCourse(course: any) {
    this.selectedCourse = course;
  }

  deleteCourse(courseId: any) {
    console.log('DELETE COURSE', courseId);
  }

  reset() {
    this.selectCourse({ ...emptyCourse });
  }
}
