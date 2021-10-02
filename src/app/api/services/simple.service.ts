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
export class SimpleService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation simplePriceGet
   */
  static readonly SimplePriceGetPath = '/simple/price';

  /**
   * Get the current price of any cryptocurrencies in any other supported currencies that you need.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `simplePriceGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  simplePriceGet$Response(params: {

    /**
     * id of coins, comma-separated if querying more than 1 coin
     * *refers to &lt;b&gt;&#x60;coins/list&#x60;&lt;/b&gt;
     */
    ids: any;

    /**
     * vs_currency of coins, comma-separated if querying more than 1 vs_currency
     * *refers to &lt;b&gt;&#x60;simple/supported_vs_currencies&#x60;&lt;/b&gt;
     */
    vs_currencies: any;

    /**
     * &lt;b&gt;true/false&lt;/b&gt; to include market_cap, &lt;b&gt;default: false&lt;/b&gt;
     */
    include_market_cap?: any;

    /**
     * &lt;b&gt;true/false&lt;/b&gt; to include 24hr_vol, &lt;b&gt;default: false&lt;/b&gt;
     */
    include_24hr_vol?: any;

    /**
     * &lt;b&gt;true/false&lt;/b&gt; to include 24hr_change, &lt;b&gt;default: false&lt;/b&gt;
     */
    include_24hr_change?: any;

    /**
     * &lt;b&gt;true/false&lt;/b&gt; to include last_updated_at of price, &lt;b&gt;default: false&lt;/b&gt;
     */
    include_last_updated_at?: any;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, SimpleService.SimplePriceGetPath, 'get');
    if (params) {
      rb.query('ids', params.ids, {});
      rb.query('vs_currencies', params.vs_currencies, {});
      rb.query('include_market_cap', params.include_market_cap, {});
      rb.query('include_24hr_vol', params.include_24hr_vol, {});
      rb.query('include_24hr_change', params.include_24hr_change, {});
      rb.query('include_last_updated_at', params.include_last_updated_at, {});
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
   * Get the current price of any cryptocurrencies in any other supported currencies that you need.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `simplePriceGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  simplePriceGet(params: {

    /**
     * id of coins, comma-separated if querying more than 1 coin
     * *refers to &lt;b&gt;&#x60;coins/list&#x60;&lt;/b&gt;
     */
    ids: any;

    /**
     * vs_currency of coins, comma-separated if querying more than 1 vs_currency
     * *refers to &lt;b&gt;&#x60;simple/supported_vs_currencies&#x60;&lt;/b&gt;
     */
    vs_currencies: any;

    /**
     * &lt;b&gt;true/false&lt;/b&gt; to include market_cap, &lt;b&gt;default: false&lt;/b&gt;
     */
    include_market_cap?: any;

    /**
     * &lt;b&gt;true/false&lt;/b&gt; to include 24hr_vol, &lt;b&gt;default: false&lt;/b&gt;
     */
    include_24hr_vol?: any;

    /**
     * &lt;b&gt;true/false&lt;/b&gt; to include 24hr_change, &lt;b&gt;default: false&lt;/b&gt;
     */
    include_24hr_change?: any;

    /**
     * &lt;b&gt;true/false&lt;/b&gt; to include last_updated_at of price, &lt;b&gt;default: false&lt;/b&gt;
     */
    include_last_updated_at?: any;
  }): Observable<void> {

    return this.simplePriceGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation simpleTokenPriceIdGet
   */
  static readonly SimpleTokenPriceIdGetPath = '/simple/token_price/{id}';

  /**
   * Get current price of tokens (using contract addresses) for a given platform in any other currency that you need.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `simpleTokenPriceIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  simpleTokenPriceIdGet$Response(params: {

    /**
     * The id of the platform issuing tokens (See asset_platforms endpoint for list of options)
     */
    id: any;

    /**
     * The contract address of tokens, comma separated
     */
    contract_addresses: any;

    /**
     * vs_currency of coins, comma-separated if querying more than 1 vs_currency
     * *refers to &lt;b&gt;&#x60;simple/supported_vs_currencies&#x60;&lt;/b&gt;
     */
    vs_currencies: any;

    /**
     * &lt;b&gt;true/false&lt;/b&gt; to include market_cap, &lt;b&gt;default: false&lt;/b&gt;
     */
    include_market_cap?: any;

    /**
     * &lt;b&gt;true/false&lt;/b&gt; to include 24hr_vol, &lt;b&gt;default: false&lt;/b&gt;
     */
    include_24hr_vol?: any;

    /**
     * &lt;b&gt;true/false&lt;/b&gt; to include 24hr_change, &lt;b&gt;default: false&lt;/b&gt;
     */
    include_24hr_change?: any;

    /**
     * &lt;b&gt;true/false&lt;/b&gt; to include last_updated_at of price, &lt;b&gt;default: false&lt;/b&gt;
     */
    include_last_updated_at?: any;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, SimpleService.SimpleTokenPriceIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
      rb.query('contract_addresses', params.contract_addresses, {});
      rb.query('vs_currencies', params.vs_currencies, {});
      rb.query('include_market_cap', params.include_market_cap, {});
      rb.query('include_24hr_vol', params.include_24hr_vol, {});
      rb.query('include_24hr_change', params.include_24hr_change, {});
      rb.query('include_last_updated_at', params.include_last_updated_at, {});
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
   * Get current price of tokens (using contract addresses) for a given platform in any other currency that you need.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `simpleTokenPriceIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  simpleTokenPriceIdGet(params: {

    /**
     * The id of the platform issuing tokens (See asset_platforms endpoint for list of options)
     */
    id: any;

    /**
     * The contract address of tokens, comma separated
     */
    contract_addresses: any;

    /**
     * vs_currency of coins, comma-separated if querying more than 1 vs_currency
     * *refers to &lt;b&gt;&#x60;simple/supported_vs_currencies&#x60;&lt;/b&gt;
     */
    vs_currencies: any;

    /**
     * &lt;b&gt;true/false&lt;/b&gt; to include market_cap, &lt;b&gt;default: false&lt;/b&gt;
     */
    include_market_cap?: any;

    /**
     * &lt;b&gt;true/false&lt;/b&gt; to include 24hr_vol, &lt;b&gt;default: false&lt;/b&gt;
     */
    include_24hr_vol?: any;

    /**
     * &lt;b&gt;true/false&lt;/b&gt; to include 24hr_change, &lt;b&gt;default: false&lt;/b&gt;
     */
    include_24hr_change?: any;

    /**
     * &lt;b&gt;true/false&lt;/b&gt; to include last_updated_at of price, &lt;b&gt;default: false&lt;/b&gt;
     */
    include_last_updated_at?: any;
  }): Observable<void> {

    return this.simpleTokenPriceIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation simpleSupportedVsCurrenciesGet
   */
  static readonly SimpleSupportedVsCurrenciesGetPath = '/simple/supported_vs_currencies';

  /**
   * Get list of supported_vs_currencies.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `simpleSupportedVsCurrenciesGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  simpleSupportedVsCurrenciesGet$Response(params?: {
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, SimpleService.SimpleSupportedVsCurrenciesGetPath, 'get');
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
   * Get list of supported_vs_currencies.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `simpleSupportedVsCurrenciesGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  simpleSupportedVsCurrenciesGet(params?: {
  }): Observable<void> {

    return this.simpleSupportedVsCurrenciesGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
