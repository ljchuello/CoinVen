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
export class ContractService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation coinsIdContractContractAddressGet
   */
  static readonly CoinsIdContractContractAddressGetPath = '/coins/{id}/contract/{contract_address}';

  /**
   * Get coin info from contract address.
   *
   * Get coin info from contract address
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `coinsIdContractContractAddressGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  coinsIdContractContractAddressGet$Response(params: {

    /**
     * Asset platform (See asset_platforms endpoint for list of options)
     */
    id: any;

    /**
     * Token&#x27;s contract address
     */
    contract_address: any;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ContractService.CoinsIdContractContractAddressGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
      rb.path('contract_address', params.contract_address, {});
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
   * Get coin info from contract address.
   *
   * Get coin info from contract address
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `coinsIdContractContractAddressGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  coinsIdContractContractAddressGet(params: {

    /**
     * Asset platform (See asset_platforms endpoint for list of options)
     */
    id: any;

    /**
     * Token&#x27;s contract address
     */
    contract_address: any;
  }): Observable<void> {

    return this.coinsIdContractContractAddressGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation coinsIdContractContractAddressMarketChartGet
   */
  static readonly CoinsIdContractContractAddressMarketChartGetPath = '/coins/{id}/contract/{contract_address}/market_chart/';

  /**
   * Get historical market data include price, market cap, and 24h volume (granularity auto) from a contract address .
   *
   * Get historical market data include price, market cap, and 24h volume (granularity auto)
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `coinsIdContractContractAddressMarketChartGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  coinsIdContractContractAddressMarketChartGet$Response(params: {

    /**
     * The id of the platform issuing tokens (See asset_platforms endpoint for list of options)
     */
    id: any;

    /**
     * Token&#x27;s contract address
     */
    contract_address: any;

    /**
     * The target currency of market data (usd, eur, jpy, etc.)
     */
    vs_currency: any;

    /**
     * Data up to number of days ago (eg. 1,14,30,max)
     */
    days: any;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ContractService.CoinsIdContractContractAddressMarketChartGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
      rb.path('contract_address', params.contract_address, {});
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
   * Get historical market data include price, market cap, and 24h volume (granularity auto) from a contract address .
   *
   * Get historical market data include price, market cap, and 24h volume (granularity auto)
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `coinsIdContractContractAddressMarketChartGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  coinsIdContractContractAddressMarketChartGet(params: {

    /**
     * The id of the platform issuing tokens (See asset_platforms endpoint for list of options)
     */
    id: any;

    /**
     * Token&#x27;s contract address
     */
    contract_address: any;

    /**
     * The target currency of market data (usd, eur, jpy, etc.)
     */
    vs_currency: any;

    /**
     * Data up to number of days ago (eg. 1,14,30,max)
     */
    days: any;
  }): Observable<void> {

    return this.coinsIdContractContractAddressMarketChartGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation coinsIdContractContractAddressMarketChartRangeGet
   */
  static readonly CoinsIdContractContractAddressMarketChartRangeGetPath = '/coins/{id}/contract/{contract_address}/market_chart/range';

  /**
   * Get historical market data include price, market cap, and 24h volume within a range of timestamp (granularity auto) from a contract address.
   *
   * Get historical market data include price, market cap, and 24h volume within a range of timestamp (granularity auto)
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `coinsIdContractContractAddressMarketChartRangeGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  coinsIdContractContractAddressMarketChartRangeGet$Response(params: {

    /**
     * The id of the platform issuing tokens (See asset_platforms endpoint for list of options)
     */
    id: any;

    /**
     * Token&#x27;s contract address
     */
    contract_address: any;

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

    const rb = new RequestBuilder(this.rootUrl, ContractService.CoinsIdContractContractAddressMarketChartRangeGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
      rb.path('contract_address', params.contract_address, {});
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
   * Get historical market data include price, market cap, and 24h volume within a range of timestamp (granularity auto) from a contract address.
   *
   * Get historical market data include price, market cap, and 24h volume within a range of timestamp (granularity auto)
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `coinsIdContractContractAddressMarketChartRangeGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  coinsIdContractContractAddressMarketChartRangeGet(params: {

    /**
     * The id of the platform issuing tokens (See asset_platforms endpoint for list of options)
     */
    id: any;

    /**
     * Token&#x27;s contract address
     */
    contract_address: any;

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

    return this.coinsIdContractContractAddressMarketChartRangeGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
