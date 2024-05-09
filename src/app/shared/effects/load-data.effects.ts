import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { loadData, loadDataFailure, loadDataSuccess } from '../actions/load-data.actions';
import { TransactionService } from '../services/transaction.service';



@Injectable()
export class DataEffects {

  loadData$ = createEffect(() => this.actions$.pipe(
    ofType(loadData),
    mergeMap(() => this.dataService.getData().pipe(
      map(data => loadDataSuccess({ data })),
      catchError(error => of(loadDataFailure({ error })))
    ))
  ));

  constructor(
    private actions$: Actions,
    private dataService: TransactionService
  ) {}
}
