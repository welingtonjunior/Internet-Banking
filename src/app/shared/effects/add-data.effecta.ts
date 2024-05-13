import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { TransactionService } from "../services/transaction.service";
import { addDataFailure, addDataRequest, addDataSuccess } from "../actions/add-data.actions";
import { catchError, map, mergeMap, of, tap } from "rxjs";
import { Store } from "@ngrx/store";
import { HideNotification, ShowNotification } from "../actions/notification.actions";

@Injectable()
export class AddDataEffects {

    constructor(
        private actions$: Actions,
        private dataService: TransactionService,
        private store: Store,
    ){}

    addDataEffects$ = createEffect(() => 
        this.actions$.pipe(
            ofType(addDataRequest),
            mergeMap((action) => 
                this.dataService.addData(action.item).pipe(
                    map((data) => {
                        this.store.dispatch(ShowNotification({
                            message: 'Transferência realizada com sucesso', 
                            action: 'Close',
                            isOpen: true
                        }));
                        return addDataSuccess({ data });
                    }),
                    catchError((error) => {
                        this.store.dispatch(ShowNotification({
                            message: 'Transferência falhou, tente novamente mais tarde', 
                            action: 'Close',
                            isOpen: true
                        }));
                        return of(addDataFailure({ error }));
                    }),
                    tap(() => {
                        this.store.dispatch(HideNotification());
                    })
                )
            )
        )
    );
}