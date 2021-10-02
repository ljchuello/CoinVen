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
export class StatusUpdatesService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation statusUpdatesGet
   */
  static readonly StatusUpdatesGetPath = '/status_updates';

  /**
   * List all status_updates with data (description, category, created_at, user, user_title and pin).
   *
   * List all status_updates with data (description, category, created_at, user, user_title and pin)
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `statusUpdatesGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  statusUpdatesGet$Response(params?: {

    /**
     * Filtered by category (eg. general, milestone, partnership, exchange_listing, software_release, fund_movement, new_listings, event)
     */
    category?: any;

    /**
     * Filtered by Project Type (eg. coin, market). If left empty returns both status from coins and markets.
     */
    project_type?: any;

    /**
     * Total results per page
     */
    per_page?: any;

    /**
     * Page through results
     */
    page?: any;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, StatusUpdatesService.StatusUpdatesGetPath, 'get');
    if (params) {
      rb.query('category', params.category, {});
      rb.query('project_type', params.project_type, {});
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
   * List all status_updates with data (description, category, created_at, user, user_title and pin).
   *
   * List all status_updates with data (description, category, created_at, user, user_title and pin)
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `statusUpdatesGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  statusUpdatesGet(params?: {

    /**
     * Filtered by category (eg. general, milestone, partnership, exchange_listing, software_release, fund_movement, new_listings, event)
     */
    category?: any;

    /**
     * Filtered by Project Type (eg. coin, market). If left empty returns both status from coins and markets.
     */
    project_type?: any;

    /**
     * Total results per page
     */
    per_page?: any;

    /**
     * Page through results
     */
    page?: any;
  }): Observable<void> {

    return this.statusUpdatesGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
