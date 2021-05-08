import { Component, OnInit, ViewChild } from '@angular/core';
import { StudentService } from 'src/app/shared/services/student.service';
import { TableVirtualScrollDataSource } from 'ng-table-virtual-scroll';
import { MatSort } from '@angular/material/sort';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  isLoading: boolean = true;
  students = new TableVirtualScrollDataSource();;
  displayedColumns = ['first_name', 'last_name', 'email'];

  constructor(
    private studentService: StudentService,
  ) { }

  async ngOnInit() {
    this.isLoading = true;
    await this.loadData();
    this.isLoading = false;
  }

  async loadData() {
    const data = await this.studentService.getList();
    this.students = new TableVirtualScrollDataSource(data);
  }

  applyFilter(filterValue: string) {
    this.students.filter = filterValue.trim().toLowerCase();
  }

}
