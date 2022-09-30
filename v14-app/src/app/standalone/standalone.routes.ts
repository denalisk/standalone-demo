import { importProvidersFrom } from "@angular/core";
import { Routes } from "@angular/router";
import { EmptyModule } from "../empty/empty.module";
import { StandaloneChildComponent } from "./standalone-child/standalone-child.component";
import { StandaloneParentComponent } from "./standalone-parent/standalone-parent.component";

export const STANDALONE_ROUTES: Routes = [{
    path: '',
    component: StandaloneParentComponent,
    providers: [
        importProvidersFrom(EmptyModule),
    ],
    children: [
        {
            path: '',
            pathMatch: 'full',
            redirectTo: 'parent'
        },
        {
            path: 'parent',
            component: StandaloneParentComponent
        }
    ]
}];