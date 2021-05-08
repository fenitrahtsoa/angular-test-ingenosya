import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/shared/services/student.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  isLoading: boolean = false;
  students: any = [];
  constructor(
    private studentService: StudentService,
  ) { }

  async ngOnInit() {
    this.isLoading = true;
    await this.loadData();
    this.isLoading = false;
  }

  async loadData() {
    this.students = await this.studentService.getList();
  }

}
