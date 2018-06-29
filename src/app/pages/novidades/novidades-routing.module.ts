import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NovidadesComponent } from './novidades.component';

const novidadesRoutes: Routes = [
    {
        path: 'novidades',
        component: NovidadesComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(novidadesRoutes)
    ],
    exports: [
        RouterModule
    ],
})
export class NovidadesRoutingModule { }
