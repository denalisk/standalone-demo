import { Component, enableProdMode, createEnvironmentInjector, ENVIRONMENT_INITIALIZER, Inject, Injectable, NgModule, OnInit } from '@angular/core';

import { bootstrapApplication, BrowserModule } from '@angular/platform-browser';
// import { AppComponent } from './app/app.component';
// import { StandaloneTestComponent } from './app/standalone-test/standalone-test.component';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
// import { AppModule } from './app/app.module';

import { environment } from './environments/environment';
import { TestToken } from './providers';

if (environment.production) {
  enableProdMode();
}


@Injectable({
  providedIn: 'root'
})
class TestService {
  public state: string;

  constructor(@Inject(TestToken) testString: string) {
    this.state = testString;
  }

  doThing(context: string) {
    console.log('TestService fired, context is: ', context, 'state is', this.state);
  }
}

@Component({
  selector: 'app-root',
  template: '<standalone-test></standalone-test>',
})
class AppComponent implements OnInit {

  constructor(private testService: TestService) {

  }

  ngOnInit(): void {
    console.log('App Component');
    this.testService.doThing('AppComponent');
  }

}

createEnvironmentInjector([
  {
    provide: ENVIRONMENT_INITIALIZER, useValue: () => {
      console.log("This function runs when this EnvironmentInjector gets created");
      return 'EnvironmentToken';
    }
  }
], TestToken);

@Component({
  standalone: true,
  selector: 'standalone-test',
  providers: [
    // {
    //   provide: TestToken,
    //   useValue: 'Standalone injection'
    // }
  ],
  template: '<h1>Success!</h1>'
})
class TestComponent implements OnInit {

  constructor(private testService: TestService) {

  }

  ngOnInit(): void {
    console.log('starting up');
    this.testService.doThing('TestComponent');
  }
}


// bootstrapApplication(TestComponent, {
//   providers: [
//     { 
//       provide: 'INJECTED_STRING',
//       useValue: 'bootstrapped value'
//     }
//   ]
// });

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    TestComponent,
    BrowserModule
  ],
  providers: [
    {
      provide: TestToken,
      useValue: 'Module injection'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

