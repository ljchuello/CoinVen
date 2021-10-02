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
export class GlobalService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation globalGet
   */
  static readonly GlobalGetPath = '/global';

  /**
   * Get cryptocurrency global data.
   *
   * Get cryptocurrency global data
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `globalGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  globalGet$Response(params?: {
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, GlobalService.GlobalGetPath, 'get');
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
   * Get cryptocurrency global data.
   *
   * Get cryptocurrency global data
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `globalGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  globalGet(params?: {
  }): Observable<void> {

    return this.globalGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation globalDecentralizedFinanceDefiGet
   */
  static readonly GlobalDecentralizedFinanceDefiGetPath = '/global/decentralized_finance_defi';

  /**
   * Get cryptocurrency global decentralized finance(defi) data.
   *
   * Get Top 100 Cryptocurrency Global Eecentralized Finance(defi) data
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `globalDecentralizedFinanceDefiGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  globalDecentralizedFinanceDefiGet$Response(params?: {
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, GlobalService.GlobalDecentralizedFinanceDefiGetPath, 'get');
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
   * Get cryptocurrency global decentralized finance(defi) data.
   *
   * Get Top 100 Cryptocurrency Global Eecentralized Finance(defi) data
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `globalDecentralizedFinanceDefiGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  globalDecentralizedFinanceDefiGet(params?: {
  }): Observable<void> {

    return this.globalDecentralizedFinanceDefiGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
