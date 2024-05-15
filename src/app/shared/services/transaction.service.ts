import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Profile, TransactionForm } from '../interfaces/transaction-form.interface';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  private dataSubject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  public data$: Observable<any[]> = this.dataSubject.asObservable();

  constructor() { }

  getData(): Observable<any[]> {
    setTimeout(() => {
      const newData = [...this.dataSubject.value];
      this.dataSubject.next(newData);
    }, 5000);

    return this.data$;
  }

  addData(item: TransactionForm | Profile): Observable<any[]> {
    const newData = [...this.dataSubject.value, item];
    this.dataSubject.next(newData);
    console.log('add service', item);
    console.log('data ==>>', newData);
    return this.data$;
  }

  removeData(index: number): void {
    const newData = [...this.dataSubject.value];
    newData.splice(index, 1);
    this.dataSubject.next(newData);
  }
}
