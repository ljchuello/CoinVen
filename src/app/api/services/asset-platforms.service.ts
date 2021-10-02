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
export class AssetPlatformsService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation assetPlatformsGet
   */
  static readonly AssetPlatformsGetPath = '/asset_platforms';

  /**
   * List all asset platforms (Blockchain networks).
   *
   * List all asset platforms
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `assetPlatformsGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  assetPlatformsGet$Response(params?: {
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, AssetPlatformsService.AssetPlatformsGetPath, 'get');
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
   * List all asset platforms (Blockchain networks).
   *
   * List all asset platforms
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `assetPlatformsGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  assetPlatformsGet(params?: {
  }): Observable<void> {

    return this.assetPlatformsGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
