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
export class FinanceService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation financePlatformsGet
   */
  static readonly FinancePlatformsGetPath = '/finance_platforms';

  /**
   * List all finance platforms.
   *
   * List all finance platforms
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `financePlatformsGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  financePlatformsGet$Response(params: {

    /**
     * Total results per page
     */
    per_page?: any;

    /**
     * page of results (paginated to 100 by default)
     */
    page: any;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, FinanceService.FinancePlatformsGetPath, 'get');
    if (params) {
      rb.query('per_page', params.per_page, {});
      rb.path('page', params.page, {});
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
   * List all finance platforms.
   *
   * List all finance platforms
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `financePlatformsGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  financePlatformsGet(params: {

    /**
     * Total results per page
     */
    per_page?: any;

    /**
     * page of results (paginated to 100 by default)
     */
    page: any;
  }): Observable<void> {

    return this.financePlatformsGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation financeProductsGet
   */
  static readonly FinanceProductsGetPath = '/finance_products';

  /**
   * List all finance products.
   *
   * List all finance products
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `financeProductsGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  financeProductsGet$Response(params: {

    /**
     * Total results per page
     */
    per_page?: any;

    /**
     * page of results (paginated to 100 by default)
     */
    page: any;

    /**
     * start date of the financial products
     */
    start_at: any;

    /**
     * end date of the financial products
     */
    end_at: any;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, FinanceService.FinanceProductsGetPath, 'get');
    if (params) {
      rb.query('per_page', params.per_page, {});
      rb.path('page', params.page, {});
      rb.path('start_at', params.start_at, {});
      rb.path('end_at', params.end_at, {});
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
   * List all finance products.
   *
   * List all finance products
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `financeProductsGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  financeProductsGet(params: {

    /**
     * Total results per page
     */
    per_page?: any;

    /**
     * page of results (paginated to 100 by default)
     */
    page: any;

    /**
     * start date of the financial products
     */
    start_at: any;

    /**
     * end date of the financial products
     */
    end_at: any;
  }): Observable<void> {

    return this.financeProductsGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
