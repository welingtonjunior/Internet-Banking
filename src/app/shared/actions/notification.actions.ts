import { createAction, props } from "@ngrx/store";

export const ShowNotification = createAction(
    '[Notification] - Show Notificaion',
    props<{ 
        message: string; 
        action?: string | undefined;
        isOpen: boolean }>()
);

export const HideNotification = createAction(
    '[Notification] - Hide Notification'
)