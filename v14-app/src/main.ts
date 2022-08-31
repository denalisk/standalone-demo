import { enableProdMode } from '@angular/core';

import { bootstrapApplication } from '@angular/platform-browser';
import { StandaloneTestComponent } from './app/standalone-test/standalone-test.component';

// import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
// import { AppModule } from './app/app.module';

import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

// platformBrowserDynamic().bootstrapModule(AppModule)
//   .catch(err => console.error(err));

bootstrapApplication(StandaloneTestComponent, {
  providers: [
    { 
      provide: 'INJECTED_STRING',
      useValue: 'bootstrapped value'
    }
  ]
});
