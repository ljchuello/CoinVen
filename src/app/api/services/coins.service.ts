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
export class CoinsService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation coinsListGet
   */
  static readonly CoinsListGetPath = '/coins/list';

  /**
   * List all supported coins id, name and symbol (no pagination required).
   *
   * Use this to obtain all the coins' id in order to make API calls
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `coinsListGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  coinsListGet$Response(params?: {

    /**
     * flag to include platform contract addresses (eg. 0x.... for Ethereum based tokens). 
     *  valid values: true, false
     */
    include_platform?: any;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, CoinsService.CoinsListGetPath, 'get');
    if (params) {
      rb.query('include_platform', params.include_platform, {});
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
   * List all supported coins id, name and symbol (no pagination required).
   *
   * Use this to obtain all the coins' id in order to make API calls
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `coinsListGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  coinsListGet(params?: {

    /**
     * flag to include platform contract addresses (eg. 0x.... for Ethereum based tokens). 
     *  valid values: true, false
     */
    include_platform?: any;
  }): Observable<void> {

    return this.coinsListGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation coinsMarketsGet
   */
  static readonly CoinsMarketsGetPath = '/coins/markets';

  /**
   * List all supported coins price, market cap, volume, and market related data.
   *
   * Use this to obtain all the coins market data (price, market cap, volume)
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `coinsMarketsGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  coinsMarketsGet$Response(params: {

    /**
     * The target currency of market data (usd, eur, jpy, etc.)
     */
    vs_currency: any;

    /**
     * The ids of the coin, comma separated crytocurrency symbols (base). refers to &#x60;/coins/list&#x60;.
     * &lt;b&gt;When left empty, returns numbers the coins observing the params &#x60;limit&#x60; and &#x60;start&#x60;&lt;/b&gt;
     */
    ids?: any;

    /**
     * filter by coin category. Refer to /coin/categories/list
     */
    category?: any;

    /**
     * valid values: &lt;b&gt;market_cap_desc, gecko_desc, gecko_asc, market_cap_asc, market_cap_desc, volume_asc, volume_desc, id_asc, id_desc&lt;/b&gt;
     * sort results by field.
     */
    order?: any;

    /**
     * valid values: 1..250
     *  Total results per page
     */
    per_page?: any;

    /**
     * Page through results
     */
    page?: any;

    /**
     * Include sparkline 7 days data (eg. true, false)
     */
    sparkline?: any;

    /**
     * Include price change percentage in &lt;b&gt;1h, 24h, 7d, 14d, 30d, 200d, 1y&lt;/b&gt; (eg. &#x27;&#x60;1h,24h,7d&#x60;&#x27; comma-separated, invalid values will be discarded)
     */
    price_change_percentage?: any;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, CoinsService.CoinsMarketsGetPath, 'get');
    if (params) {
      rb.query('vs_currency', params.vs_currency, {});
      rb.query('ids', params.ids, {});
      rb.query('category', params.category, {});
      rb.query('order', params.order, {});
      rb.query('per_page', params.per_page, {});
      rb.query('page', params.page, {});
      rb.query('sparkline', params.sparkline, {});
      rb.query('price_change_percentage', params.price_change_percentage, {});
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
   * List all supported coins price, market cap, volume, and market related data.
   *
   * Use this to obtain all the coins market data (price, market cap, volume)
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `coinsMarketsGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  coinsMarketsGet(params: {

    /**
     * The target currency of market data (usd, eur, jpy, etc.)
     */
    vs_currency: any;

    /**
     * The ids of the coin, comma separated crytocurrency symbols (base). refers to &#x60;/coins/list&#x60;.
     * &lt;b&gt;When left empty, returns numbers the coins observing the params &#x60;limit&#x60; and &#x60;start&#x60;&lt;/b&gt;
     */
    ids?: any;

    /**
     * filter by coin category. Refer to /coin/categories/list
     */
    category?: any;

    /**
     * valid values: &lt;b&gt;market_cap_desc, gecko_desc, gecko_asc, market_cap_asc, market_cap_desc, volume_asc, volume_desc, id_asc, id_desc&lt;/b&gt;
     * sort results by field.
     */
    order?: any;

    /**
     * valid values: 1..250
     *  Total results per page
     */
    per_page?: any;

    /**
     * Page through results
     */
    page?: any;

    /**
     * Include sparkline 7 days data (eg. true, false)
     */
    sparkline?: any;

    /**
     * Include price change percentage in &lt;b&gt;1h, 24h, 7d, 14d, 30d, 200d, 1y&lt;/b&gt; (eg. &#x27;&#x60;1h,24h,7d&#x60;&#x27; comma-separated, invalid values will be discarded)
     */
    price_change_percentage?: any;
  }): Observable<void> {

    return this.coinsMarketsGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation coinsIdGet
   */
  static readonly CoinsIdGetPath = '/coins/{id}';

  /**
   * Get current data (name, price, market, ... including exchange tickers) for a coin.
   *
   * Get current data (name, price, market, ... including exchange tickers) for a coin.<br><br> **IMPORTANT**:
   *  Ticker object is limited to 100 items, to get more tickers, use `/coins/{id}/tickers`
   *  Ticker `is_stale` is true when ticker that has not been updated/unchanged from the exchange for a while.
   *  Ticker `is_anomaly` is true if ticker's price is outliered by our system.
   *  You are responsible for managing how you want to display these information (e.g. footnote, different background, change opacity, hide)
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `coinsIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  coinsIdGet$Response(params: {

    /**
     * pass the coin id (can be obtained from /coins) eg. bitcoin
     */
    id: any;

    /**
     * Include all localized languages in response (true/false) &lt;b&gt;[default: true]&lt;/b&gt;
     */
    localization?: any;

    /**
     * Include tickers data (true/false) &lt;b&gt;[default: true]&lt;/b&gt;
     */
    tickers?: any;

    /**
     * Include market_data (true/false) &lt;b&gt;[default: true]&lt;/b&gt;
     */
    market_data?: any;

    /**
     * Include community_data data (true/false) &lt;b&gt;[default: true]&lt;/b&gt;
     */
    community_data?: any;

    /**
     * Include developer_data data (true/false) &lt;b&gt;[default: true]&lt;/b&gt;
     */
    developer_data?: any;

    /**
     * Include sparkline 7 days data (eg. true, false) &lt;b&gt;[default: false]&lt;/b&gt;
     */
    sparkline?: any;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, CoinsService.CoinsIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
      rb.query('localization', params.localization, {});
      rb.query('tickers', params.tickers, {});
      rb.query('market_data', params.market_data, {});
      rb.query('community_data', params.community_data, {});
      rb.query('developer_data', params.developer_data, {});
      rb.query('sparkline', params.sparkline, {});
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
   * Get current data (name, price, market, ... including exchange tickers) for a coin.
   *
   * Get current data (name, price, market, ... including exchange tickers) for a coin.<br><br> **IMPORTANT**:
   *  Ticker object is limited to 100 items, to get more tickers, use `/coins/{id}/tickers`
   *  Ticker `is_stale` is true when ticker that has not been updated/unchanged from the exchange for a while.
   *  Ticker `is_anomaly` is true if ticker's price is outliered by our system.
   *  You are responsible for managing how you want to display these information (e.g. footnote, different background, change opacity, hide)
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `coinsIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  coinsIdGet(params: {

    /**
     * pass the coin id (can be obtained from /coins) eg. bitcoin
     */
    id: any;

    /**
     * Include all localized languages in response (true/false) &lt;b&gt;[default: true]&lt;/b&gt;
     */
    localization?: any;

    /**
     * Include tickers data (true/false) &lt;b&gt;[default: true]&lt;/b&gt;
     */
    tickers?: any;

    /**
     * Include market_data (true/false) &lt;b&gt;[default: true]&lt;/b&gt;
     */
    market_data?: any;

    /**
     * Include community_data data (true/false) &lt;b&gt;[default: true]&lt;/b&gt;
     */
    community_data?: any;

    /**
     * Include developer_data data (true/false) &lt;b&gt;[default: true]&lt;/b&gt;
     */
    developer_data?: any;

    /**
     * Include sparkline 7 days data (eg. true, false) &lt;b&gt;[default: false]&lt;/b&gt;
     */
    sparkline?: any;
  }): Observable<void> {

    return this.coinsIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation coinsIdTickersGet
   */
  static readonly CoinsIdTickersGetPath = '/coins/{id}/tickers';

  /**
   * Get coin tickers (paginated to 100 items).
   *
   * Get coin tickers (paginated to 100 items)<br><br> **IMPORTANT**:
   *  Ticker `is_stale` is true when ticker that has not been updated/unchanged from the exchange for a while.
   *  Ticker `is_anomaly` is true if ticker's price is outliered by our system.
   *  You are responsible for managing how you want to display these information (e.g. footnote, different background, change opacity, hide)
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `coinsIdTickersGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  coinsIdTickersGet$Response(params: {

    /**
     * pass the coin id (can be obtained from /coins/list) eg. bitcoin
     */
    id: any;

    /**
     * filter results by exchange_ids (ref: v3/exchanges/list)
     */
    exchange_ids?: any;

    /**
     * flag to show exchange_logo
     */
    include_exchange_logo?: any;

    /**
     * Page through results
     */
    page?: any;

    /**
     * valid values: &lt;b&gt;trust_score_desc (default), trust_score_asc and volume_desc&lt;/b&gt;
     */
    order?: any;

    /**
     * flag to show 2% orderbook depth. valid values: true, false
     */
    depth?: any;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, CoinsService.CoinsIdTickersGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
      rb.query('exchange_ids', params.exchange_ids, {});
      rb.query('include_exchange_logo', params.include_exchange_logo, {});
      rb.query('page', params.page, {});
      rb.query('order', params.order, {});
      rb.query('depth', params.depth, {});
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
   * Get coin tickers (paginated to 100 items).
   *
   * Get coin tickers (paginated to 100 items)<br><br> **IMPORTANT**:
   *  Ticker `is_stale` is true when ticker that has not been updated/unchanged from the exchange for a while.
   *  Ticker `is_anomaly` is true if ticker's price is outliered by our system.
   *  You are responsible for managing how you want to display these information (e.g. footnote, different background, change opacity, hide)
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `coinsIdTickersGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  coinsIdTickersGet(params: {

    /**
     * pass the coin id (can be obtained from /coins/list) eg. bitcoin
     */
    id: any;

    /**
     * filter results by exchange_ids (ref: v3/exchanges/list)
     */
    exchange_ids?: any;

    /**
     * flag to show exchange_logo
     */
    include_exchange_logo?: any;

    /**
     * Page through results
     */
    page?: any;

    /**
     * valid values: &lt;b&gt;trust_score_desc (default), trust_score_asc and volume_desc&lt;/b&gt;
     */
    order?: any;

    /**
     * flag to show 2% orderbook depth. valid values: true, false
     */
    depth?: any;
  }): Observable<void> {

    return this.coinsIdTickersGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation coinsIdHistoryGet
   */
  static readonly CoinsIdHistoryGetPath = '/coins/{id}/history';

  /**
   * Get historical data (name, price, market, stats) at a given date for a coin.
   *
   * Get historical data (name, price, market, stats) at a given date for a coin
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `coinsIdHistoryGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  coinsIdHistoryGet$Response(params: {

    /**
     * pass the coin id (can be obtained from /coins) eg. bitcoin
     */
    id: any;

    /**
     * The date of data snapshot in dd-mm-yyyy eg. 30-12-2017
     */
    date: any;

    /**
     * Set to false to exclude localized languages in response
     */
    localization?: any;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, CoinsService.CoinsIdHistoryGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
      rb.query('date', params.date, {});
      rb.query('localization', params.localization, {});
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
   * Get historical data (name, price, market, stats) at a given date for a coin.
   *
   * Get historical data (name, price, market, stats) at a given date for a coin
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `coinsIdHistoryGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  coinsIdHistoryGet(params: {

    /**
     * pass the coin id (can be obtained from /coins) eg. bitcoin
     */
    id: any;

    /**
     * The date of data snapshot in dd-mm-yyyy eg. 30-12-2017
     */
    date: any;

    /**
     * Set to false to exclude localized languages in response
     */
    localization?: any;
  }): Observable<void> {

    return this.coinsIdHistoryGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation coinsIdMarketChartGet
   */
  static readonly CoinsIdMarketChartGetPath = '/coins/{id}/market_chart';

  /**
   * Get historical market data include price, market cap, and 24h volume (granularity auto).
   *
   * Get historical market data include price, market cap, and 24h volume (granularity auto)
   *  <b>Minutely data will be used for duration within 1 day, Hourly data will be used for duration between 1 day and 90 days, Daily data will be used for duration above 90 days.</b>
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `coinsIdMarketChartGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  coinsIdMarketChartGet$Response(params: {

    /**
     * pass the coin id (can be obtained from /coins) eg. bitcoin
     */
    id: any;

    /**
     * The target currency of market data (usd, eur, jpy, etc.)
     */
    vs_currency: any;

    /**
     * Data up to number of days ago (eg. 1,14,30,max)
     */
    days: any;

    /**
     * Data interval. Possible value: daily
     */
    interval?: any;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, CoinsService.CoinsIdMarketChartGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
      rb.query('vs_currency', params.vs_currency, {});
      rb.query('days', params.days, {});
      rb.query('interval', params.interval, {});
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
   * Get historical market data include price, market cap, and 24h volume (granularity auto).
   *
   * Get historical market data include price, market cap, and 24h volume (granularity auto)
   *  <b>Minutely data will be used for duration within 1 day, Hourly data will be used for duration between 1 day and 90 days, Daily data will be used for duration above 90 days.</b>
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `coinsIdMarketChartGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  coinsIdMarketChartGet(params: {

    /**
     * pass the coin id (can be obtained from /coins) eg. bitcoin
     */
    id: any;

    /**
     * The target currency of market data (usd, eur, jpy, etc.)
     */
    vs_currency: any;

    /**
     * Data up to number of days ago (eg. 1,14,30,max)
     */
    days: any;

    /**
     * Data interval. Possible value: daily
     */
    interval?: any;
  }): Observable<void> {

    return this.coinsIdMarketChartGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation coinsIdMarketChartRangeGet
   */
  static readonly CoinsIdMarketChartRangeGetPath = '/coins/{id}/market_chart/range';

  /**
   * Get historical market data include price, market cap, and 24h volume within a range of timestamp (granularity auto).
   *
   * Get historical market data include price, market cap, and 24h volume within a range of timestamp (granularity auto)
   *  <b><ul><li>Data granularity is automatic (cannot be adjusted)</li><li>1 day from query time = 5 minute interval data</li><li>1 - 90 days from query time = hourly data</li><li>above 90 days from query time = daily data (00:00 UTC)</li></ul> </b>
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `coinsIdMarketChartRangeGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  coinsIdMarketChartRangeGet$Response(params: {

    /**
     * pass the coin id (can be obtained from /coins) eg. bitcoin
     */
    id: any;

    /**
     * The target currency of market data (usd, eur, jpy, etc.)
     */
    vs_currency: any;

    /**
     * From date in UNIX Timestamp (eg. 1392577232)
     */
    from: any;

    /**
     * To date in UNIX Timestamp (eg. 1422577232)
     */
    to: any;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, CoinsService.CoinsIdMarketChartRangeGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
      rb.query('vs_currency', params.vs_currency, {});
      rb.query('from', params.from, {});
      rb.query('to', params.to, {});
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
   * Get historical market data include price, market cap, and 24h volume within a range of timestamp (granularity auto).
   *
   * Get historical market data include price, market cap, and 24h volume within a range of timestamp (granularity auto)
   *  <b><ul><li>Data granularity is automatic (cannot be adjusted)</li><li>1 day from query time = 5 minute interval data</li><li>1 - 90 days from query time = hourly data</li><li>above 90 days from query time = daily data (00:00 UTC)</li></ul> </b>
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `coinsIdMarketChartRangeGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  coinsIdMarketChartRangeGet(params: {

    /**
     * pass the coin id (can be obtained from /coins) eg. bitcoin
     */
    id: any;

    /**
     * The target currency of market data (usd, eur, jpy, etc.)
     */
    vs_currency: any;

    /**
     * From date in UNIX Timestamp (eg. 1392577232)
     */
    from: any;

    /**
     * To date in UNIX Timestamp (eg. 1422577232)
     */
    to: any;
  }): Observable<void> {

    return this.coinsIdMarketChartRangeGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation coinsIdStatusUpdatesGet
   */
  static readonly CoinsIdStatusUpdatesGetPath = '/coins/{id}/status_updates';

  /**
   * Get status updates for a given coin.
   *
   * Get status updates for a given coin
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `coinsIdStatusUpdatesGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  coinsIdStatusUpdatesGet$Response(params: {

    /**
     * pass the coin id (can be obtained from /coins) eg. bitcoin
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

    const rb = new RequestBuilder(this.rootUrl, CoinsService.CoinsIdStatusUpdatesGetPath, 'get');
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
   * Get status updates for a given coin.
   *
   * Get status updates for a given coin
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `coinsIdStatusUpdatesGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  coinsIdStatusUpdatesGet(params: {

    /**
     * pass the coin id (can be obtained from /coins) eg. bitcoin
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

    return this.coinsIdStatusUpdatesGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation coinsIdOhlcGet
   */
  static readonly CoinsIdOhlcGetPath = '/coins/{id}/ohlc';

  /**
   * Get coin's OHLC.
   *
   * Candle's body:
   *
   * 1 - 2 days: 30 minutes
   * 3 - 30 days: 4 hours
   * 31 and before: 4 days
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `coinsIdOhlcGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  coinsIdOhlcGet$Response(params: {

    /**
     * pass the coin id (can be obtained from /coins/list) eg. bitcoin
     */
    id: any;

    /**
     * The target currency of market data (usd, eur, jpy, etc.)
     */
    vs_currency: any;

    /**
     * Data up to number of days ago (1/7/14/30/90/180/365/max)
     */
    days: any;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, CoinsService.CoinsIdOhlcGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
      rb.query('vs_currency', params.vs_currency, {});
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
   * Get coin's OHLC.
   *
   * Candle's body:
   *
   * 1 - 2 days: 30 minutes
   * 3 - 30 days: 4 hours
   * 31 and before: 4 days
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `coinsIdOhlcGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  coinsIdOhlcGet(params: {

    /**
     * pass the coin id (can be obtained from /coins/list) eg. bitcoin
     */
    id: any;

    /**
     * The target currency of market data (usd, eur, jpy, etc.)
     */
    vs_currency: any;

    /**
     * Data up to number of days ago (1/7/14/30/90/180/365/max)
     */
    days: any;
  }): Observable<void> {

    return this.coinsIdOhlcGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
