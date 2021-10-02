/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';


@Injectable({
  providedIn: 'root',
})
export class PingService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation pingGet
   */
  static readonly PingGetPath = '/ping';

  /**
   * Check API server status.
   *
   * Check API server status
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `pingGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  pingGet$Response(params?: {
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, PingService.PingGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * Check API server status.
   *
   * Check API server status
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `pingGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  pingGet(params?: {
  }): Observable<void> {

    return this.pingGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
