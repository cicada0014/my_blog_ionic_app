import { HTTP } from '@ionic-native/http';
import { Injectable } from '@angular/core';


@Injectable()
export class HttpService {
    private headers: Headers = new Headers(
        {
            'Content-Type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest',
            'Cache-Control': 'no-cache',
            'Pragma': 'no-cache',
        }
    )

    constructor(private http: HTTP, ) {


    }


    public sendApi(routePath: string) {
        // 환경 체크는 http 서비스랑 authguard에서만 체크한다.
        return {
            get: (param?: Object) => {
                // this.http.get().
                return this.http.get(routePath, param, this.headers)

            },
            post: (body?: Object) => {
                return this.http.post(routePath, body, this.headers)
            },
            patch: (body?: Object) => {
                return this.http.patch(routePath, body, this.headers)
            },
            delete: () => {
                return this.http.delete(routePath, {}, this.headers)
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