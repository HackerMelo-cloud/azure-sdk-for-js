/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { PollerLike, PollOperationState } from "@azure/core-lro";
import {
  CustomDomain,
  CustomDomainsListByEndpointOptionalParams,
  CustomDomainsGetOptionalParams,
  CustomDomainsGetResponse,
  CustomDomainParameters,
  CustomDomainsCreateOptionalParams,
  CustomDomainsCreateResponse,
  CustomDomainsDeleteOptionalParams,
  CustomDomainsDisableCustomHttpsOptionalParams,
  CustomDomainsDisableCustomHttpsResponse,
  CustomDomainsEnableCustomHttpsOptionalParams,
  CustomDomainsEnableCustomHttpsResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a CustomDomains. */
export interface CustomDomains {
  /**
   * Lists all of the existing custom domains within an endpoint.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the CDN profile which is unique within the resource group.
   * @param endpointName Name of the endpoint under the profile which is unique globally.
   * @param options The options parameters.
   */
  listByEndpoint(
    resourceGroupName: string,
    profileName: string,
    endpointName: string,
    options?: CustomDomainsListByEndpointOptionalParams
  ): PagedAsyncIterableIterator<CustomDomain>;
  /**
   * Gets an existing custom domain within an endpoint.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the CDN profile which is unique within the resource group.
   * @param endpointName Name of the endpoint under the profile which is unique globally.
   * @param customDomainName Name of the custom domain within an endpoint.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    profileName: string,
    endpointName: string,
    customDomainName: string,
    options?: CustomDomainsGetOptionalParams
  ): Promise<CustomDomainsGetResponse>;
  /**
   * Creates a new custom domain within an endpoint.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the CDN profile which is unique within the resource group.
   * @param endpointName Name of the endpoint under the profile which is unique globally.
   * @param customDomainName Name of the custom domain within an endpoint.
   * @param customDomainProperties Properties required to create a new custom domain.
   * @param options The options parameters.
   */
  beginCreate(
    resourceGroupName: string,
    profileName: string,
    endpointName: string,
    customDomainName: string,
    customDomainProperties: CustomDomainParameters,
    options?: CustomDomainsCreateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<CustomDomainsCreateResponse>,
      CustomDomainsCreateResponse
    >
  >;
  /**
   * Creates a new custom domain within an endpoint.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the CDN profile which is unique within the resource group.
   * @param endpointName Name of the endpoint under the profile which is unique globally.
   * @param customDomainName Name of the custom domain within an endpoint.
   * @param customDomainProperties Properties required to create a new custom domain.
   * @param options The options parameters.
   */
  beginCreateAndWait(
    resourceGroupName: string,
    profileName: string,
    endpointName: string,
    customDomainName: string,
    customDomainProperties: CustomDomainParameters,
    options?: CustomDomainsCreateOptionalParams
  ): Promise<CustomDomainsCreateResponse>;
  /**
   * Deletes an existing custom domain within an endpoint.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the CDN profile which is unique within the resource group.
   * @param endpointName Name of the endpoint under the profile which is unique globally.
   * @param customDomainName Name of the custom domain within an endpoint.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    profileName: string,
    endpointName: string,
    customDomainName: string,
    options?: CustomDomainsDeleteOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>>;
  /**
   * Deletes an existing custom domain within an endpoint.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the CDN profile which is unique within the resource group.
   * @param endpointName Name of the endpoint under the profile which is unique globally.
   * @param customDomainName Name of the custom domain within an endpoint.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    profileName: string,
    endpointName: string,
    customDomainName: string,
    options?: CustomDomainsDeleteOptionalParams
  ): Promise<void>;
  /**
   * Disable https delivery of the custom domain.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the CDN profile which is unique within the resource group.
   * @param endpointName Name of the endpoint under the profile which is unique globally.
   * @param customDomainName Name of the custom domain within an endpoint.
   * @param options The options parameters.
   */
  disableCustomHttps(
    resourceGroupName: string,
    profileName: string,
    endpointName: string,
    customDomainName: string,
    options?: CustomDomainsDisableCustomHttpsOptionalParams
  ): Promise<CustomDomainsDisableCustomHttpsResponse>;
  /**
   * Enable https delivery of the custom domain.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the CDN profile which is unique within the resource group.
   * @param endpointName Name of the endpoint under the profile which is unique globally.
   * @param customDomainName Name of the custom domain within an endpoint.
   * @param options The options parameters.
   */
  enableCustomHttps(
    resourceGroupName: string,
    profileName: string,
    endpointName: string,
    customDomainName: string,
    options?: CustomDomainsEnableCustomHttpsOptionalParams
  ): Promise<CustomDomainsEnableCustomHttpsResponse>;
}
