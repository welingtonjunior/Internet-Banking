import { createFeatureSelector, createSelector } from "@ngrx/store";
import { NotificationState } from "../reducers/notification.reducer";

export const selectNotificationState = createFeatureSelector<NotificationState>('notification');

export const selectNotification = createSelector(
    selectNotificationState,
    (state: NotificationState) => state
)