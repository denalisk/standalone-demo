import { Routes } from '@angular/router';
import { FooComponent } from './foo-bar/foo/foo.component';

export const APP_ROUTES: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'foo'
    },
    {
        path: 'foo',
        component: FooComponent,
        title: 'Foo Component' // Shows up as tab title
    },

    // Option 1: Lazy Loading another Routing Config
    {
        path: 'standalone',
        loadChildren: () =>
            import('./standalone/standalone.routes')
                .then(m => m.STANDALONE_ROUTES),
        title: 'Standalone Routes'
    },

    // Option 2: Directly Lazy Loading a Standalone Component
    {
        path: 'standalone-direct',
        loadComponent: () =>
            import('./standalone/standalone-child/standalone-child.component')
                .then(m => m.StandaloneChildComponent),
        title: 'Standalone Child'
    }
];