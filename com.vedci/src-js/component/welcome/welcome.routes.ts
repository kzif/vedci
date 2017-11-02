import { Routes } from "@angular/router";
import { LoginComponent } from "./login.component";
import { RegisterComponent } from "./register.component";
import {ForgotPasswordComponent} from "./forgot-password.component";
import {RegisterConfirmationComponent} from "./register-confirmation.component";
import {WelcomeTemplate} from "../template/welcome.template";
import {LogoutComponent} from "./logout.component";


export const WelcomeRoutes: Routes = [

    //{ path: 'welcome', component: DashboardComponent, canActivate: [ AuthService ],
    //{ path: '', redirectTo: 'login',  pathMatch: 'full' },

    { path: '', component: WelcomeTemplate,
        children:[
            { path: '', component: LoginComponent },
            { path: 'login', component: LoginComponent },
            { path: 'login/:url', component: LoginComponent },
            { path: 'register', component: RegisterComponent },
            { path: 'forgot-password', component: ForgotPasswordComponent },
            { path: 'forgot-password/:token', component: ForgotPasswordComponent },
            { path: 'register-confirmation', component: RegisterConfirmationComponent },
            { path: 'logout', component: LogoutComponent }
        ]
    }

];