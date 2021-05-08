import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { routes } from './userpages.routes';
import { SharedModule } from '../shared/shared.module';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { TableVirtualScrollModule } from 'ng-table-virtual-scroll';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { DetailComponent } from './home/detail/detail.component';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserModule } from '@angular/platform-browser';
import { ReadmeComponent } from './readme/readme.component';
import { MatIcon, MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    HomeComponent,
    DetailComponent,
    ReadmeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    ScrollingModule,
    TableVirtualScrollModule,
    MatTableModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatDialogModule,
    RouterModule.forChild(routes),
  ],
  providers: [],
  entryComponents: [
    DetailComponent
  ]
})
export class UserpagesModule { }
