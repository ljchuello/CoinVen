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
export class CompaniesBetaService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation companiesPublicTreasuryCoinIdGet
   */
  static readonly CompaniesPublicTreasuryCoinIdGetPath = '/companies/public_treasury/{coin_id}';

  /**
   * Get public companies data.
   *
   * Get public companies bitcoin or ethereum holdings (Ordered by total holdings descending)
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `companiesPublicTreasuryCoinIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  companiesPublicTreasuryCoinIdGet$Response(params: {

    /**
     * bitcoin or ethereum
     */
    coin_id: any;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, CompaniesBetaService.CompaniesPublicTreasuryCoinIdGetPath, 'get');
    if (params) {
      rb.path('coin_id', params.coin_id, {});
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
   * Get public companies data.
   *
   * Get public companies bitcoin or ethereum holdings (Ordered by total holdings descending)
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `companiesPublicTreasuryCoinIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  companiesPublicTreasuryCoinIdGet(params: {

    /**
     * bitcoin or ethereum
     */
    coin_id: any;
  }): Observable<void> {

    return this.companiesPublicTreasuryCoinIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
