import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideEffects } from '@ngrx/effects';
import { provideStore } from '@ngrx/store';
import { DataEffects } from './shared/effects/load-data.effects';
import { dataReducer } from './shared/reducers/load-data.reducer';
import { AddDataEffects } from './shared/effects/add-data.effecta';
import { addDataReducer } from './shared/reducers/add-data.reducer';
import { notificationReducer } from './shared/reducers/notification.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), 
    provideClientHydration(), 
    provideAnimationsAsync(), 
    provideStore({
      data: dataReducer,
      notification: notificationReducer,
      addData: addDataReducer
    }), 
    provideEffects(DataEffects),
    provideEffects(AddDataEffects)]
};


