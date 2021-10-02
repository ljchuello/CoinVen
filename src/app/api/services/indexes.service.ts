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
export class IndexesService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation indexesGet
   */
  static readonly IndexesGetPath = '/indexes';

  /**
   * List all market indexes.
   *
   * List all market indexes
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `indexesGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  indexesGet$Response(params?: {

    /**
     * Total results per page
     */
    per_page?: any;

    /**
     * Page through results
     */
    page?: any;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, IndexesService.IndexesGetPath, 'get');
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
   * List all market indexes.
   *
   * List all market indexes
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `indexesGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  indexesGet(params?: {

    /**
     * Total results per page
     */
    per_page?: any;

    /**
     * Page through results
     */
    page?: any;
  }): Observable<void> {

    return this.indexesGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation indexesMarketIdIdGet
   */
  static readonly IndexesMarketIdIdGetPath = '/indexes/{market_id}/{id}';

  /**
   * get market index by market id and index id.
   *
   * get market index by market id and index id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `indexesMarketIdIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  indexesMarketIdIdGet$Response(params: {

    /**
     * pass the market id (can be obtained from /exchanges/list)
     */
    market_id: any;

    /**
     * pass the index id (can be obtained from /indexes/list)
     */
    id: any;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, IndexesService.IndexesMarketIdIdGetPath, 'get');
    if (params) {
      rb.path('market_id', params.market_id, {});
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
   * get market index by market id and index id.
   *
   * get market index by market id and index id
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `indexesMarketIdIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  indexesMarketIdIdGet(params: {

    /**
     * pass the market id (can be obtained from /exchanges/list)
     */
    market_id: any;

    /**
     * pass the index id (can be obtained from /indexes/list)
     */
    id: any;
  }): Observable<void> {

    return this.indexesMarketIdIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation indexesListGet
   */
  static readonly IndexesListGetPath = '/indexes/list';

  /**
   * list market indexes id and name.
   *
   * list market indexes id and name
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `indexesListGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  indexesListGet$Response(params?: {
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, IndexesService.IndexesListGetPath, 'get');
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
   * list market indexes id and name.
   *
   * list market indexes id and name
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `indexesListGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  indexesListGet(params?: {
  }): Observable<void> {

    return this.indexesListGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
