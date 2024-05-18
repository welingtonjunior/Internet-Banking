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
                        this.showNotification(true)
                        return addDataSuccess({ data });
                    }),
                    catchError((error) => {
                        this.showNotification(false)
                        return of(addDataFailure({ error }));
                    }),
                    tap(() => {
                        this.store.dispatch(HideNotification());
                    })
                )
            )
        )
    );
    private showNotification(isSuccess: boolean): void {
        this.store.dispatch(ShowNotification({
            message: isSuccess ? 'Solicitação realizada com sucesso' : 'Solicitação falhou, tente novamente mais tarde',
            action: 'Close',
            isOpen: true,
            duration: 3000
        }));
    }
}