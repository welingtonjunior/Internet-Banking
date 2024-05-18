import { createReducer, on } from "@ngrx/store";
import { HideNotification, ShowNotification } from "../actions/notification.actions";

export interface NotificationState {
    isOpen: boolean,
    data: { message: string; action: string | undefined; duration: number}
}

export const initialNotificationState: NotificationState = {
    isOpen: false, 
    data: { message: '', action: '', duration: 0}
}

export const notificationReducer = createReducer(
    initialNotificationState,
    on(ShowNotification, (state, { message, action, isOpen, duration }) => {
        console.log('ShowNotification action dispatched with message:', message);
        return {
            ...state,
            isOpen: isOpen,
            data: { message, action, duration }
        };
    }),
    on(HideNotification, state => {
        console.log('HideNotification action dispatched');
        return {
            ...state,
            isOpen: false
        };
    })
);
