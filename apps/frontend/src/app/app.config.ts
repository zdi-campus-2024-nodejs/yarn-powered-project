import {ApplicationConfig, importProvidersFrom, provideZoneChangeDetection} from '@angular/core';
import {provideRouter, withRouterConfig, withViewTransitions} from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';
import {provideHttpClient, withInterceptors} from '@angular/common/http';
import {provideAnimations} from '@angular/platform-browser/animations';
import {routes} from './app.routes';

export const appConfig: ApplicationConfig = {
    providers: [
        importProvidersFrom(BrowserModule),
        provideHttpClient(withInterceptors([])),
        provideZoneChangeDetection({eventCoalescing: true}),
        provideRouter(routes, withViewTransitions(), withRouterConfig({onSameUrlNavigation: 'reload'})),
        provideAnimations(),
    ]
};
