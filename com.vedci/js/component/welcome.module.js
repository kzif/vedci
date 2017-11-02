"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var core_2 = require("@ngx-translate/core");
var http_1 = require("@angular/common/http");
var welcome_template_1 = require("./template/welcome.template");
var welcome_routes_1 = require("./welcome/welcome.routes");
var login_component_1 = require("./welcome/login.component");
var register_component_1 = require("./welcome/register.component");
var forgot_password_component_1 = require("./welcome/forgot-password.component");
var translate_loader_factory_1 = require("../factory/translate-loader.factory");
var register_confirmation_component_1 = require("./welcome/register-confirmation.component");
var common_1 = require("@angular/common");
var footer_module_1 = require("./footer.module");
var http_interceptor_service_1 = require("../service/http-interceptor.service");
var forms_1 = require("@angular/forms");
var logout_component_1 = require("./welcome/logout.component");
var WelcomeModule = /** @class */ (function () {
    function WelcomeModule(translate) {
        // this language will be used as a fallback when a translation isn't found in the current language
        translate.setDefaultLang('pt-br');
        // the lang to use, if the lang isn't available, it will use the current loader to get them
        translate.use('pt-br');
    }
    WelcomeModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                http_1.HttpClientModule,
                footer_module_1.FooterModule,
                forms_1.FormsModule,
                router_1.RouterModule.forChild(welcome_routes_1.WelcomeRoutes),
                core_2.TranslateModule.forRoot({
                    loader: {
                        provide: core_2.TranslateLoader,
                        useFactory: function (http) { return new translate_loader_factory_1.TranslateLoaderFactory(http, [
                            './translate/welcome/',
                            './translate/general/footer/'
                        ], '.json'); },
                        deps: [http_1.HttpClient]
                    },
                    isolate: true
                })
            ],
            providers: [
                { provide: http_1.HTTP_INTERCEPTORS, useClass: http_interceptor_service_1.HttpInterceptorService, multi: true }
            ],
            declarations: [
                welcome_template_1.WelcomeTemplate,
                login_component_1.LoginComponent,
                forgot_password_component_1.ForgotPasswordComponent,
                register_confirmation_component_1.RegisterConfirmationComponent,
                register_component_1.RegisterComponent,
                logout_component_1.LogoutComponent
            ],
        }),
        __metadata("design:paramtypes", [core_2.TranslateService])
    ], WelcomeModule);
    return WelcomeModule;
}());
exports.WelcomeModule = WelcomeModule;
//# sourceMappingURL=welcome.module.js.map