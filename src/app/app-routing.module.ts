import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    //{ path: 'login', loadChildren: './auth/auth.module#AuthModule' },
    // { path: 'logout', component: LogoutComponent },
    { path: '', redirectTo: 'index', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }