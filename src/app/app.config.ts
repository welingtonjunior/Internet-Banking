import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { EffectsRunner, provideEffects } from '@ngrx/effects';
import { provideStore } from '@ngrx/store';
import { DataEffects } from './shared/effects/load-data.effects';
import { dataReducer } from './shared/reducers/load-data.reducer';
import { addDataReducer } from './shared/reducers/add-data.reducer';
import { notificationReducer } from './shared/reducers/notification.reducer';
import { AddDataEffects } from './shared/effects/add-data.effecta';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), 
    provideClientHydration(), 
    provideAnimationsAsync(),
    provideHttpClient(),
    provideStore({
      data: dataReducer,
      notification: notificationReducer,
      addData: addDataReducer
    }), 
    EffectsRunner,
    provideEffects(DataEffects),
    provideEffects(AddDataEffects), 
  ]
};
