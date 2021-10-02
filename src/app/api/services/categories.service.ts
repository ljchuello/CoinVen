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
export class CategoriesService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation coinsCategoriesListGet
   */
  static readonly CoinsCategoriesListGetPath = '/coins/categories/list';

  /**
   * List all categories.
   *
   * List all categories
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `coinsCategoriesListGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  coinsCategoriesListGet$Response(params?: {
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, CategoriesService.CoinsCategoriesListGetPath, 'get');
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
   * List all categories.
   *
   * List all categories
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `coinsCategoriesListGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  coinsCategoriesListGet(params?: {
  }): Observable<void> {

    return this.coinsCategoriesListGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation coinsCategoriesGet
   */
  static readonly CoinsCategoriesGetPath = '/coins/categories';

  /**
   * List all categories with market data.
   *
   * List all categories with market data
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `coinsCategoriesGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  coinsCategoriesGet$Response(params?: {

    /**
     * valid values: &lt;b&gt;market_cap_desc (default), market_cap_asc, name_desc, name_asc, market_cap_change_24h_desc and market_cap_change_24h_asc&lt;/b&gt;
     */
    order?: any;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, CategoriesService.CoinsCategoriesGetPath, 'get');
    if (params) {
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
   * List all categories with market data.
   *
   * List all categories with market data
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `coinsCategoriesGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  coinsCategoriesGet(params?: {

    /**
     * valid values: &lt;b&gt;market_cap_desc (default), market_cap_asc, name_desc, name_asc, market_cap_change_24h_desc and market_cap_change_24h_asc&lt;/b&gt;
     */
    order?: any;
  }): Observable<void> {

    return this.coinsCategoriesGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
