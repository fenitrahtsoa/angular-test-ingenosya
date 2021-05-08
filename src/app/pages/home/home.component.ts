import { Component, OnInit, ViewChild } from '@angular/core';
import { StudentService } from 'src/app/shared/services/student.service';
import { TableVirtualScrollDataSource } from 'ng-table-virtual-scroll';
import { MatSort } from '@angular/material/sort';
import { SelectionModel } from '@angular/cdk/collections';
import { MatDialog } from '@angular/material/dialog';
import { DetailComponent } from './detail/detail.component';
import Student from 'src/app/shared/models/student.model';

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
    public dialog: MatDialog,
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

  viewDetail(item: Student) {
    console.log(item)
    const dialogRef = this.dialog.open(DetailComponent, {
      width: '750px',
      data: item ? item : ''
    });
    dialogRef.afterClosed().subscribe(async (result: any) => {
      if (result) {
        this.isLoading = false;
        this.ngOnInit();
      }
    });
  }

}
