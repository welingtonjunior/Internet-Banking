import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { TransactionService } from "../services/transaction.service";
import { addDataFailure, addDataRequest, addDataSuccess } from "../actions/add-data.actions";
import { catchError, map, mergeMap, of } from "rxjs";

@Injectable()
export class AddDataEffects {

    constructor(
        private actions$: Actions,
        private dataService: TransactionService
      ){}

    addDataEffects$ = createEffect(() => 
        this.actions$.pipe(
            ofType(addDataRequest),
            mergeMap((action) => 
                this.dataService.addData(action.item).pipe(
                    map((data) => addDataSuccess({ data })),
                    catchError((error) => of(addDataFailure({error})))
                )
        )
        )
    )
}