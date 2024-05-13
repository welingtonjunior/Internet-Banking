import { createFeatureSelector, createSelector } from "@ngrx/store";
import { DataState } from "../reducers/load-data.reducer";

export const selectDataState = createFeatureSelector<DataState>('data')

export const selectData = createSelector(
    selectDataState,
    (state: DataState) => state
)
