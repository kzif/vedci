import { Observable } from 'rxjs/Rx';
import {Injectable} from "@angular/core";
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from "@angular/common/http";
import 'rxjs/add/operator/do';
import {AuthGuardService} from "./auth-guard.service";

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
@Injectable()
export class HttpInterceptorService implements HttpInterceptor {
    private authService : AuthGuardService;
    private baseUrl: string = '../../tmp-json/';

    /**
     * Construtor padrão da Classe
     *
     * @param {AuthGuardService} authService
     */
    constructor(authService: AuthGuardService){
        this.authService = authService;
    }

    /**
     * Intecepta as requisições http
     * @param {HttpRequest<any>} req
     * @param {HttpHandler} next
     * @returns {Observable<HttpEvent<any>>}
     */
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        //Monta o header
        req = this.getHeaders(req);

        return next.handle(req).map(response => {
            if (response instanceof HttpResponse) {

                //Verifica se existe alguma mensagem do servidor, caso exista exibe
                if(response.body.intercept){
                    this.showMessage(response.body.intercept);
                }

                //Verifca se existe copor de mensagem e faz a tratativa
                if(response.body.body){
                    response = response.clone({
                        body: response.body.body
                    });
                }
            }

            return response;
        });
    }

    /**
     * Monta o cabeçalho de requisição
     *
     * @param {HttpRequest<any>} req
     * @returns {HttpRequest<any>}
     */
    private getHeaders(req: HttpRequest<any>): HttpRequest<any> {
        req = req.clone({
            url: this.getUrl(req.url, req.method),
            method: "get", //Alterar usado somente para teste
            setHeaders: {
                Authorization: "LOUCO É POUCO"
            }
        });

        return req;
    }

    /**
     * Obtem a url com sua Base
     *
     * @param {string} url
     * @param {string} method
     * @returns {string}
     */
    private getUrl(url:string, method: string): string{
        //Coloca a base na url
        if(url.startsWith('/')){
            url = `${this.baseUrl}/${url}`;
        }else{
            url = `${this.baseUrl}${url}`;
        }

        //Trata as passagens de parametos -- Alterar usado somente para teste
        if(url.indexOf('?')>= 0){
            url = url.replace('?',`.${method}.json?`)
        }else{
            url = `${url}.${method}.json`;
        }

        return url;
    }


    /**
     * Mostra as mensagens interceptadas
     *
     * @param message
     */
    private showMessage(message:any): void{

    }

}