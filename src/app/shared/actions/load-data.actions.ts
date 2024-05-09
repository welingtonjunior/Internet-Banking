import { createAction, props } from '@ngrx/store';

export const loadData = createAction('[Data] Load Data');

export const loadDataSuccess = createAction(
  '[Data] Load Data Success',
  props<{ data: any[] }>()
);

export const loadDataFailure = createAction(
  '[Data] Load Data Failure',
  props<{ error: any }>()
);
