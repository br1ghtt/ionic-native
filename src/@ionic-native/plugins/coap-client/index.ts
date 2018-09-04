/**
 * This is a template for new plugin wrappers
 *
 * TODO:
 * - Add/Change information below
 * - Document usage (importing, executing main functionality)
 * - Remove any imports that you are not using
 * - Remove all the comments included in this template, EXCEPT the @Plugin wrapper docs and any other docs you added
 * - Remove this note
 *
 */
import { Injectable } from '@angular/core';
import { Plugin, Cordova, IonicNativePlugin } from '@ionic-native/core';

export interface RequestOptions {
  protocol: string;
  host: string;
  port: number;
  path?: string;
  payload?: string;
  query?: string;
  accept?: string;
  useCons?: boolean;
  requestTimeout?: number;
}

export interface WebLink {
  attributes?: any;
  uri: string;
}

export interface CoapResponse {
  acknowledged: boolean;
  canceled: boolean;
  code: string;
  code_value: string;
  duplicate: boolean;
  mid: number;
  rejected: boolean;
  rtt: number;
  timed_out: boolean;
  timestamp: number;
  token: string;
  type: string;
  type_value: number;
  payload: string;
  payload_size: number;
  layer3: Layer3;
  options: Options;
}

export interface Layer3 {
  destination_address: string;
  destination_port: number;
  source_address: string;
  source_port: number;
}

export interface Options {
  if_match: string[];
  uri_host: string;
  etag: string[];
  if_none_match: boolean;
  uri_port: number;
  location_path: string;
  uri_path: string;
  content_format: string;
  content_format_value: number;
  max_age: number;
  uri_query: string;
  accept: string;
  accept_value: number;
  location_query: string;
  proxy_uri: string;
  proxy_scheme: string;
  size1: number;
  size2: number;
}

export interface MediaType {
  code: number;
  value: string;
}

export interface Resource {
  uri: string;
  attributes: Attribute[];
}

export interface Attribute {
  key: string;
  values: AttributeValue[];
}

export interface AttributeValue {
  value: string;
}

/**
 * @name coap-client
 * @description
 * This plugin does something
 *
 * @usage
 * ```typescript
 * import { coap-client } from '@ionic-native/coap-client';
 *
 *
 * constructor(private coap-client: coap-client) { }
 *
 * ...
 *
 *
 * this.coap-client.functionName('Hello', 123)
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 */
@Plugin({
  pluginName: 'CoapClient',
  plugin: 'cordova-plugin-coap',
  pluginRef: 'CoapClient', // the variable reference to call the plugin, example: navigator.geolocation
  repo: 'https://github.com/br1ghtt/cordova-plugin-coap', // the github repository URL for the plugin
  platforms: ['Android'] // Array of platforms supported, example: ['Android', 'iOS']
})
@Injectable()
export class CoapClient extends IonicNativePlugin {

  @Cordova()
  get(options: RequestOptions): Promise<CoapResponse> {
    return;
  }

  @Cordova()
  post(options: RequestOptions): Promise<CoapResponse> {
    return;
  }

  @Cordova()
  put(options: RequestOptions): Promise<CoapResponse> {
    return;
  }

  @Cordova()
  delete(options: RequestOptions): Promise<CoapResponse> {
    return;
  }

  @Cordova()
  discover(options: RequestOptions): Promise<Resource[]> {
    return;
  }

  @Cordova()
  ping(options: RequestOptions): Promise<string> {
    return;
  }

  @Cordova()
  mediaTypes(): Promise<MediaType[]> {
    return;
  }
}

