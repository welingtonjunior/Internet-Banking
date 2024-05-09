import { createReducer, on } from '@ngrx/store';
import { loadData, loadDataFailure, loadDataSuccess } from '../actions/load-data.actions';


export interface DataState {
  data: any[];
  loading: boolean;
  error: any;
}

export const initialState: DataState = {
  data: [],
  loading: false,
  error: null
};

export const dataReducer = createReducer(
  initialState,
  on(loadData, state => ({
    ...state,
    loading: true,
    error: null
  })),
  on(loadDataSuccess, (state, { data }) => ({
    ...state,
    data,
    loading: false
  })),
  on(loadDataFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false
  }))
);
