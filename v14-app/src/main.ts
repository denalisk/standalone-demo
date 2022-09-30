import './polyfills';

import { enableProdMode, importProvidersFrom } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { bootstrapApplication } from '@angular/platform-browser';
import { StandaloneParentComponent } from './app/standalone/standalone-parent/standalone-parent.component';
import { AppComponent } from './app/app.component';
import { EmptyModule } from './app/empty/empty.module';
import { RouterModule } from '@angular/router';
import { APP_ROUTES } from './app/app.routes';
import { ConsumerService } from './app/consumer.service';
import { DependencyService } from './app/dependency.service';

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));

// bootstrapApplication(StandaloneParentComponent, {
//   providers: [
//     // Can import providers for modules that are necessary without
//     // explicitly listing them all
//     ConsumerService,
//     DependencyService,
//     importProvidersFrom(EmptyModule),
//     // importProvidersFrom(RouterModule.forRoot(APP_ROUTES))
//   ]
// })
