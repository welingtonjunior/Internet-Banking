import { createReducer, on } from '@ngrx/store';
import { addDataFailure, addDataRequest, addDataSuccess } from '../actions/add-data.actions';

export interface addDataState {
  data: any[];
  loading: boolean;
  error: any;
}

export const initialState: addDataState = {
  data: [],
  loading: false,
  error: null
};

export const addDataReducer = createReducer(
  initialState,
  on(addDataRequest, state => ({
    ...state,
    loading: true,
    error: null
  })),
  on(addDataSuccess, (state, { data }) => ({
    ...state,
    data,
    loading: false
  })),
  on(addDataFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false
  }))
);
