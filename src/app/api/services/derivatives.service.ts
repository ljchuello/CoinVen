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
export class DerivativesService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation derivativesGet
   */
  static readonly DerivativesGetPath = '/derivatives';

  /**
   * List all derivative tickers.
   *
   * List all derivative tickers
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `derivativesGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  derivativesGet$Response(params?: {

    /**
     * [&#x27;all&#x27;, &#x27;unexpired&#x27;] - expired to show unexpired tickers, all to list all tickers, defaults to unexpired
     */
    include_tickers?: any;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, DerivativesService.DerivativesGetPath, 'get');
    if (params) {
      rb.query('include_tickers', params.include_tickers, {});
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
   * List all derivative tickers.
   *
   * List all derivative tickers
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `derivativesGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  derivativesGet(params?: {

    /**
     * [&#x27;all&#x27;, &#x27;unexpired&#x27;] - expired to show unexpired tickers, all to list all tickers, defaults to unexpired
     */
    include_tickers?: any;
  }): Observable<void> {

    return this.derivativesGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation derivativesExchangesGet
   */
  static readonly DerivativesExchangesGetPath = '/derivatives/exchanges';

  /**
   * List all derivative exchanges.
   *
   * List all derivative exchanges
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `derivativesExchangesGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  derivativesExchangesGet$Response(params?: {

    /**
     * order results using following params name_asc，name_desc，open_interest_btc_asc，open_interest_btc_desc，trade_volume_24h_btc_asc，trade_volume_24h_btc_desc
     */
    order?: any;

    /**
     * Total results per page
     */
    per_page?: any;

    /**
     * Page through results
     */
    page?: any;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, DerivativesService.DerivativesExchangesGetPath, 'get');
    if (params) {
      rb.query('order', params.order, {});
      rb.query('per_page', params.per_page, {});
      rb.query('page', params.page, {});
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
   * List all derivative exchanges.
   *
   * List all derivative exchanges
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `derivativesExchangesGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  derivativesExchangesGet(params?: {

    /**
     * order results using following params name_asc，name_desc，open_interest_btc_asc，open_interest_btc_desc，trade_volume_24h_btc_asc，trade_volume_24h_btc_desc
     */
    order?: any;

    /**
     * Total results per page
     */
    per_page?: any;

    /**
     * Page through results
     */
    page?: any;
  }): Observable<void> {

    return this.derivativesExchangesGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation derivativesExchangesIdGet
   */
  static readonly DerivativesExchangesIdGetPath = '/derivatives/exchanges/{id}';

  /**
   * show derivative exchange data.
   *
   * show derivative exchange data
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `derivativesExchangesIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  derivativesExchangesIdGet$Response(params: {

    /**
     * pass the exchange id (can be obtained from derivatives/exchanges/list) eg. bitmex
     */
    id: any;

    /**
     * [&#x27;all&#x27;, &#x27;unexpired&#x27;] - expired to show unexpired tickers, all to list all tickers, leave blank to omit tickers data in response
     */
    include_tickers?: any;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, DerivativesService.DerivativesExchangesIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
      rb.query('include_tickers', params.include_tickers, {});
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
   * show derivative exchange data.
   *
   * show derivative exchange data
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `derivativesExchangesIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  derivativesExchangesIdGet(params: {

    /**
     * pass the exchange id (can be obtained from derivatives/exchanges/list) eg. bitmex
     */
    id: any;

    /**
     * [&#x27;all&#x27;, &#x27;unexpired&#x27;] - expired to show unexpired tickers, all to list all tickers, leave blank to omit tickers data in response
     */
    include_tickers?: any;
  }): Observable<void> {

    return this.derivativesExchangesIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation derivativesExchangesListGet
   */
  static readonly DerivativesExchangesListGetPath = '/derivatives/exchanges/list';

  /**
   * List all derivative exchanges name and identifier.
   *
   * List all derivative exchanges name and identifier
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `derivativesExchangesListGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  derivativesExchangesListGet$Response(params?: {
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, DerivativesService.DerivativesExchangesListGetPath, 'get');
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
   * List all derivative exchanges name and identifier.
   *
   * List all derivative exchanges name and identifier
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `derivativesExchangesListGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  derivativesExchangesListGet(params?: {
  }): Observable<void> {

    return this.derivativesExchangesListGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
