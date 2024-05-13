import { createReducer, on } from "@ngrx/store";
import { HideNotification, ShowNotification } from "../actions/notification.actions";

export interface NotificationState {
    isOpen: boolean,
    data: { message: string; action: string | undefined; }
}

export const initialNotificationState: NotificationState = {
    isOpen: false, 
    data: { message: '', action: ''}
}

export const notificationReducer = createReducer(
    initialNotificationState,
    on(ShowNotification, (state, { message, action, isOpen }) => ({
        ...state,
        isOpen: isOpen,
        data: { message, action }
    })),
    on(HideNotification, state => ({
        ...state,
        isOpen: false
    }))
)