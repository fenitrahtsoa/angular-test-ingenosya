import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  jsonURL : string = './assets/fileJson/students.json';
  constructor(private http: HttpClient) { 
  }

  public getList(): Promise<any> {
    return new Promise(async (resolve, reject) => {
      try {        
        this.http.get(this.jsonURL).subscribe(async result => {
          resolve(result);
        })        
      } catch (e) {
        reject(e);
      }
    });    
  }
}
