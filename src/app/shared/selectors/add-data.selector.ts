import { createFeatureSelector, createSelector } from "@ngrx/store";
import { addDataState } from "../reducers/add-data.reducer";

export const selectDataState = createFeatureSelector<addDataState>('data')

export const selectAddData = createSelector(
    selectDataState,
    (state: addDataState) => state.data
)

export const selectAddDataLoading = createSelector(
    selectDataState,
    (state: addDataState) => state.loading
)

export const SelectAddDataError = createSelector(
    selectDataState,
    (state: addDataState) => state.error
)