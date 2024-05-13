import { createAction, props } from '@ngrx/store';
import { Profile, TransactionForm } from '../interfaces/transaction-form.interface';

export const addDataRequest = createAction(
  '[Add Data] - Request',
  props<{ item: TransactionForm | Profile }>()
);

export const addDataSuccess = createAction(
  '[Add Data] - Success',
  props<{ data: any }>()
);
export const addDataFailure = createAction(
  '[Add Data] - Failure',
  props<{ error: any }>()
);
