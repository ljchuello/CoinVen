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
export class ExchangeRatesService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation exchangeRatesGet
   */
  static readonly ExchangeRatesGetPath = '/exchange_rates';

  /**
   * Get BTC-to-Currency exchange rates.
   *
   * Get BTC-to-Currency exchange rates
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `exchangeRatesGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  exchangeRatesGet$Response(params?: {
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ExchangeRatesService.ExchangeRatesGetPath, 'get');
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
   * Get BTC-to-Currency exchange rates.
   *
   * Get BTC-to-Currency exchange rates
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `exchangeRatesGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  exchangeRatesGet(params?: {
  }): Observable<void> {

    return this.exchangeRatesGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
