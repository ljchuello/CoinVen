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
export class EventsService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation eventsGet
   */
  static readonly EventsGetPath = '/events';

  /**
   * Get events, paginated by 100.
   *
   * Get events, paginated by 100
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `eventsGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  eventsGet$Response(params?: {

    /**
     * country_code of event (eg. &#x27;US&#x27;). use &lt;b&gt;/api/v3/events/countries&lt;/b&gt; for list of country_codes
     */
    country_code?: any;

    /**
     * type of event (eg. &#x27;Conference&#x27;). use &lt;b&gt;/api/v3/events/types&lt;/b&gt; for list of types
     */
    type?: any;

    /**
     * page of results (paginated by 100)
     */
    page?: any;

    /**
     * lists only upcoming events. &lt;br&gt;true, false&lt;/br&gt; (defaults to true, set to false to list all events)
     */
    upcoming_events_only?: any;

    /**
     * lists events after this date yyyy-mm-dd
     */
    from_date?: any;

    /**
     * lists events before this date yyyy-mm-dd (set upcoming_events_only to false if fetching past events)
     */
    to_date?: any;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, EventsService.EventsGetPath, 'get');
    if (params) {
      rb.query('country_code', params.country_code, {});
      rb.query('type', params.type, {});
      rb.query('page', params.page, {});
      rb.query('upcoming_events_only', params.upcoming_events_only, {});
      rb.query('from_date', params.from_date, {});
      rb.query('to_date', params.to_date, {});
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
   * Get events, paginated by 100.
   *
   * Get events, paginated by 100
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `eventsGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  eventsGet(params?: {

    /**
     * country_code of event (eg. &#x27;US&#x27;). use &lt;b&gt;/api/v3/events/countries&lt;/b&gt; for list of country_codes
     */
    country_code?: any;

    /**
     * type of event (eg. &#x27;Conference&#x27;). use &lt;b&gt;/api/v3/events/types&lt;/b&gt; for list of types
     */
    type?: any;

    /**
     * page of results (paginated by 100)
     */
    page?: any;

    /**
     * lists only upcoming events. &lt;br&gt;true, false&lt;/br&gt; (defaults to true, set to false to list all events)
     */
    upcoming_events_only?: any;

    /**
     * lists events after this date yyyy-mm-dd
     */
    from_date?: any;

    /**
     * lists events before this date yyyy-mm-dd (set upcoming_events_only to false if fetching past events)
     */
    to_date?: any;
  }): Observable<void> {

    return this.eventsGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation eventsCountriesGet
   */
  static readonly EventsCountriesGetPath = '/events/countries';

  /**
   * Get list of event countries.
   *
   * Get list of event countries
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `eventsCountriesGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  eventsCountriesGet$Response(params?: {
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, EventsService.EventsCountriesGetPath, 'get');
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
   * Get list of event countries.
   *
   * Get list of event countries
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `eventsCountriesGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  eventsCountriesGet(params?: {
  }): Observable<void> {

    return this.eventsCountriesGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation eventsTypesGet
   */
  static readonly EventsTypesGetPath = '/events/types';

  /**
   * Get list of events types.
   *
   * Get list of event types
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `eventsTypesGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  eventsTypesGet$Response(params?: {
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, EventsService.EventsTypesGetPath, 'get');
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
   * Get list of events types.
   *
   * Get list of event types
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `eventsTypesGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  eventsTypesGet(params?: {
  }): Observable<void> {

    return this.eventsTypesGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
