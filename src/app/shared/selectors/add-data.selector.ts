import { createFeatureSelector, createSelector } from "@ngrx/store";
import { addDataState } from "../reducers/add-data.reducer";

export const selectDataState = createFeatureSelector<addDataState>('addData')

export const selectAddData = createSelector(
    selectDataState,
    (state: addDataState) => state
)
