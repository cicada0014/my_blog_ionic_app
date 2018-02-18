
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';


@Injectable()
export class HttpService {
    private headers: HttpHeaders = new HttpHeaders(
        {
            'Content-Type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest',
            'Cache-Control': 'no-cache',
            'Pragma': 'no-cache',
        }
    )

    private hostUrl = '';

    constructor(private http: HttpClient, ) {

    }


    public sendApi(routePath: string) {
        // 환경 체크는 http 서비스랑 authguard에서만 체크한다.
        return {
            get: (params?: HttpParams) => {
                // this.http.get().
                return this.http.get(`${this.hostUrl}/${routePath}`, {
                    headers: this.headers,
                    params: params,
                })

            },
            post: (body?: Object) => {
                return this.http.post(`${this.hostUrl}/${routePath}`, body, {
                    headers: this.headers
                })
            },
            patch: (body?: Object) => {
                return this.http.patch(`${this.hostUrl}/${routePath}`, body, {
                    headers: this.headers,
                })
            },
            delete: () => {
                return this.http.delete(`${this.hostUrl}/${routePath}`, {
                    headers: this.headers,
                })
            }
        }
    }

    // private formatParams(params): string {
    //     if (params) {
    //         return Object
    //             .keys(params)
    //             .map(function (key) {
    //                 return key + "=" + params[key]
    //             })
    //             .join("&");
    //     } else {
    //         return ''
    //     }

    // }


}