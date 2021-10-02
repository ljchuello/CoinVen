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
export class TrendingService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation searchTrendingGet
   */
  static readonly SearchTrendingGetPath = '/search/trending';

  /**
   * Get trending search coins (Top-7) on CoinGecko in the last 24 hours.
   *
   * Top-7 trending coins on CoinGecko as searched by users in the last 24 hours (Ordered by most popular first)
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `searchTrendingGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  searchTrendingGet$Response(params?: {
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, TrendingService.SearchTrendingGetPath, 'get');
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
   * Get trending search coins (Top-7) on CoinGecko in the last 24 hours.
   *
   * Top-7 trending coins on CoinGecko as searched by users in the last 24 hours (Ordered by most popular first)
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `searchTrendingGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  searchTrendingGet(params?: {
  }): Observable<void> {

    return this.searchTrendingGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
