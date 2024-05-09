import { Injectable } from '@angular/core';
import { Observable, of, timer } from 'rxjs';
import { map } from 'rxjs/operators';
import { TransactionForm } from '../interfaces/transaction-form.interface';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  private data: any[] = [];

  constructor() { }

  getData(): Observable<any[]> {
    return timer(0, 5000).pipe( 
      map(() => this.data.slice())
    );
  }

  addData(item: TransactionForm): Observable<any[]> {
    const newData = [...this.data, item];
    this.data = newData;
    console.log('add service', item)
    return of(newData);
  }

  removeData(index: number): void {
    const newData = [...this.data];
    newData.splice(index, 1);
    this.data = newData;
  }
}
