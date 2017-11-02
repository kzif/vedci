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
var http_1 = require("@angular/common/http");
require("rxjs/add/operator/do");
var auth_guard_service_1 = require("./auth-guard.service");
/**
 * Classe criada para inteceptar as conexões http.
 * Esta classe é responsável por compor corretamente as requisições http para a API, também faz um filtro nos erros
 * Retornados pelo servidor.
 *
 * @author kamikaze <kamizaze@icefenix.com>
 * @version 1.0.0.1
 * @copyright EULA © 2017, IceFenix.com.
 * @access public
 * @package services
 */
var HttpInterceptorService = /** @class */ (function () {
    /**
     * Construtor padrão da Classe
     *
     * @param {AuthGuardService} authService
     */
    function HttpInterceptorService(authService) {
        this.baseUrl = '../../tmp-json/';
        this.authService = authService;
    }
    /**
     * Intecepta as requisições http
     * @param {HttpRequest<any>} req
     * @param {HttpHandler} next
     * @returns {Observable<HttpEvent<any>>}
     */
    HttpInterceptorService.prototype.intercept = function (req, next) {
        var _this = this;
        //Monta o header
        req = this.getHeaders(req);
        return next.handle(req).map(function (response) {
            if (response instanceof http_1.HttpResponse) {
                //Verifica se existe alguma mensagem do servidor, caso exista exibe
                if (response.body.intercept) {
                    _this.showMessage(response.body.intercept);
                }
                //Verifca se existe copor de mensagem e faz a tratativa
                if (response.body.body) {
                    response = response.clone({
                        body: response.body.body
                    });
                }
            }
            return response;
        });
    };
    /**
     * Monta o cabeçalho de requisição
     *
     * @param {HttpRequest<any>} req
     * @returns {HttpRequest<any>}
     */
    HttpInterceptorService.prototype.getHeaders = function (req) {
        req = req.clone({
            url: this.getUrl(req.url, req.method),
            method: "get",
            setHeaders: {
                Authorization: "LOUCO É POUCO"
            }
        });
        return req;
    };
    /**
     * Obtem a url com sua Base
     *
     * @param {string} url
     * @param {string} method
     * @returns {string}
     */
    HttpInterceptorService.prototype.getUrl = function (url, method) {
        //Coloca a base na url
        if (url.startsWith('/')) {
            url = this.baseUrl + "/" + url;
        }
        else {
            url = "" + this.baseUrl + url;
        }
        //Trata as passagens de parametos -- Alterar usado somente para teste
        if (url.indexOf('?') >= 0) {
            url = url.replace('?', "." + method + ".json?");
        }
        else {
            url = url + "." + method + ".json";
        }
        return url;
    };
    /**
     * Mostra as mensagens interceptadas
     *
     * @param message
     */
    HttpInterceptorService.prototype.showMessage = function (message) {
    };
    HttpInterceptorService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [auth_guard_service_1.AuthGuardService])
    ], HttpInterceptorService);
    return HttpInterceptorService;
}());
exports.HttpInterceptorService = HttpInterceptorService;
//# sourceMappingURL=http-interceptor.service.js.map