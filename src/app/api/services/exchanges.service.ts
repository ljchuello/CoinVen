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
export class ExchangesService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation exchangesGet
   */
  static readonly ExchangesGetPath = '/exchanges';

  /**
   * List all exchanges.
   *
   * List all exchanges
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `exchangesGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  exchangesGet$Response(params?: {

    /**
     * Valid values: 1...250
     * Total results per page
     * Default value:: 100
     */
    per_page?: any;

    /**
     * page through results
     */
    page?: any;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ExchangesService.ExchangesGetPath, 'get');
    if (params) {
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
   * List all exchanges.
   *
   * List all exchanges
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `exchangesGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  exchangesGet(params?: {

    /**
     * Valid values: 1...250
     * Total results per page
     * Default value:: 100
     */
    per_page?: any;

    /**
     * page through results
     */
    page?: any;
  }): Observable<void> {

    return this.exchangesGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation exchangesListGet
   */
  static readonly ExchangesListGetPath = '/exchanges/list';

  /**
   * List all supported markets id and name (no pagination required).
   *
   * Use this to obtain all the markets' id in order to make API calls
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `exchangesListGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  exchangesListGet$Response(params?: {
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ExchangesService.ExchangesListGetPath, 'get');
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
   * List all supported markets id and name (no pagination required).
   *
   * Use this to obtain all the markets' id in order to make API calls
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `exchangesListGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  exchangesListGet(params?: {
  }): Observable<void> {

    return this.exchangesListGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation exchangesIdGet
   */
  static readonly ExchangesIdGetPath = '/exchanges/{id}';

  /**
   * Get exchange volume in BTC and top 100 tickers only.
   *
   * Get exchange volume in BTC and tickers<br><br> **IMPORTANT**:
   *  Ticker object is limited to 100 items, to get more tickers, use `/exchanges/{id}/tickers`
   *  Ticker `is_stale` is true when ticker that has not been updated/unchanged from the exchange for a while.
   *  Ticker `is_anomaly` is true if ticker's price is outliered by our system.
   *  You are responsible for managing how you want to display these information (e.g. footnote, different background, change opacity, hide)
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `exchangesIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  exchangesIdGet$Response(params: {

    /**
     * pass the exchange id (can be obtained from /exchanges/list) eg. binance
     */
    id: any;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ExchangesService.ExchangesIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
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
   * Get exchange volume in BTC and top 100 tickers only.
   *
   * Get exchange volume in BTC and tickers<br><br> **IMPORTANT**:
   *  Ticker object is limited to 100 items, to get more tickers, use `/exchanges/{id}/tickers`
   *  Ticker `is_stale` is true when ticker that has not been updated/unchanged from the exchange for a while.
   *  Ticker `is_anomaly` is true if ticker's price is outliered by our system.
   *  You are responsible for managing how you want to display these information (e.g. footnote, different background, change opacity, hide)
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `exchangesIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  exchangesIdGet(params: {

    /**
     * pass the exchange id (can be obtained from /exchanges/list) eg. binance
     */
    id: any;
  }): Observable<void> {

    return this.exchangesIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation exchangesIdTickersGet
   */
  static readonly ExchangesIdTickersGetPath = '/exchanges/{id}/tickers';

  /**
   * Get exchange tickers (paginated, 100 tickers per page).
   *
   * Get exchange tickers (paginated)<br><br> **IMPORTANT**:
   *  Ticker `is_stale` is true when ticker that has not been updated/unchanged from the exchange for a while.
   *  Ticker `is_anomaly` is true if ticker's price is outliered by our system.
   *  You are responsible for managing how you want to display these information (e.g. footnote, different background, change opacity, hide)
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `exchangesIdTickersGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  exchangesIdTickersGet$Response(params: {

    /**
     * pass the exchange id (can be obtained from /exchanges/list) eg. binance
     */
    id: any;

    /**
     * filter tickers by coin_ids (ref: v3/coins/list)
     */
    coin_ids?: any;

    /**
     * flag to show exchange_logo
     */
    include_exchange_logo?: any;

    /**
     * Page through results
     */
    page?: any;

    /**
     * flag to show 2% orderbook depth i.e., cost_to_move_up_usd and cost_to_move_down_usd
     */
    depth?: any;

    /**
     * valid values: &lt;b&gt;trust_score_desc (default), trust_score_asc and volume_desc&lt;/b&gt;
     */
    order?: any;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ExchangesService.ExchangesIdTickersGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
      rb.query('coin_ids', params.coin_ids, {});
      rb.query('include_exchange_logo', params.include_exchange_logo, {});
      rb.query('page', params.page, {});
      rb.query('depth', params.depth, {});
      rb.query('order', params.order, {});
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
   * Get exchange tickers (paginated, 100 tickers per page).
   *
   * Get exchange tickers (paginated)<br><br> **IMPORTANT**:
   *  Ticker `is_stale` is true when ticker that has not been updated/unchanged from the exchange for a while.
   *  Ticker `is_anomaly` is true if ticker's price is outliered by our system.
   *  You are responsible for managing how you want to display these information (e.g. footnote, different background, change opacity, hide)
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `exchangesIdTickersGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  exchangesIdTickersGet(params: {

    /**
     * pass the exchange id (can be obtained from /exchanges/list) eg. binance
     */
    id: any;

    /**
     * filter tickers by coin_ids (ref: v3/coins/list)
     */
    coin_ids?: any;

    /**
     * flag to show exchange_logo
     */
    include_exchange_logo?: any;

    /**
     * Page through results
     */
    page?: any;

    /**
     * flag to show 2% orderbook depth i.e., cost_to_move_up_usd and cost_to_move_down_usd
     */
    depth?: any;

    /**
     * valid values: &lt;b&gt;trust_score_desc (default), trust_score_asc and volume_desc&lt;/b&gt;
     */
    order?: any;
  }): Observable<void> {

    return this.exchangesIdTickersGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation exchangesIdStatusUpdatesGet
   */
  static readonly ExchangesIdStatusUpdatesGetPath = '/exchanges/{id}/status_updates';

  /**
   * Get status updates for a given exchange.
   *
   * Get status updates for a given exchange
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `exchangesIdStatusUpdatesGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  exchangesIdStatusUpdatesGet$Response(params: {

    /**
     * pass the exchange id (can be obtained from /exchanges/list) eg. binance
     */
    id: any;

    /**
     * Total results per page
     */
    per_page?: any;

    /**
     * Page through results
     */
    page?: any;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ExchangesService.ExchangesIdStatusUpdatesGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
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
   * Get status updates for a given exchange.
   *
   * Get status updates for a given exchange
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `exchangesIdStatusUpdatesGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  exchangesIdStatusUpdatesGet(params: {

    /**
     * pass the exchange id (can be obtained from /exchanges/list) eg. binance
     */
    id: any;

    /**
     * Total results per page
     */
    per_page?: any;

    /**
     * Page through results
     */
    page?: any;
  }): Observable<void> {

    return this.exchangesIdStatusUpdatesGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation exchangesIdVolumeChartGet
   */
  static readonly ExchangesIdVolumeChartGetPath = '/exchanges/{id}/volume_chart';

  /**
   * Get volume_chart data for a given exchange.
   *
   * Get volume_chart data for a given exchange
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `exchangesIdVolumeChartGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  exchangesIdVolumeChartGet$Response(params: {

    /**
     * pass the exchange id (can be obtained from /exchanges/list) eg. binance
     */
    id: any;

    /**
     * Data up to number of days ago (eg. 1,14,30)
     */
    days: any;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ExchangesService.ExchangesIdVolumeChartGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
      rb.query('days', params.days, {});
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
   * Get volume_chart data for a given exchange.
   *
   * Get volume_chart data for a given exchange
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `exchangesIdVolumeChartGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  exchangesIdVolumeChartGet(params: {

    /**
     * pass the exchange id (can be obtained from /exchanges/list) eg. binance
     */
    id: any;

    /**
     * Data up to number of days ago (eg. 1,14,30)
     */
    days: any;
  }): Observable<void> {

    return this.exchangesIdVolumeChartGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
